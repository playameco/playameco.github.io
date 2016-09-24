import auth from './components/Login/auth.js'

function redirectToLogin(nextState, replace) {
  if (!auth.loggedIn()) {
    replace({
      pathname: '/login',
      state: { nextPathname: nextState.location.pathname }
    })
  }
}

function redirectToDashboard(nextState, replace) {
  if (auth.loggedIn()) {
    replace('/')
  }
}

export default {
  component: require('./App').default,
  childRoutes: [
    // { path: '/logout',
    //   getComponent: (nextState, cb) => {
    //     require.ensure([], (require) => {
    //       cb(null, require('./components/Logout'))
    //     })
    //   }
    // },
    { path: '/about',
      getComponent: (nextState, cb) => {
        require.ensure([], (require) => {
          cb(null, require('./components/PointSystem').default)
        })
      }
    },

    { path: '/materials',
      getComponent: (nextState, cb) => {
        require.ensure([], (require) => {
          cb(null, require('./components/Materials/MaterialMainPage').default)
        })
      }
    },

    { path: '/materials/learn',
      getComponent: (nextState, cb) => {
        require.ensure([], (require) => {
          cb(null, require('./components/Materials/LearnSection').default)
        })
      }
    },

    { path: '/materials/recycle',
      getComponent: (nextState, cb) => {
        require.ensure([], (require) => {
          cb(null, require('./components/Materials/RecycleSection').default)
        })
      }
    },

    { path: '/materials/reuse',
      getComponent: (nextState, cb) => {
        require.ensure([], (require) => {
          cb(null, require('./components/Materials/ReuseSection').default)
        })
      }
    },

    { path: '/materials/reduce',
      getComponent: (nextState, cb) => {
        require.ensure([], (require) => {
          cb(null, require('./components/Materials/ReduceSection').default)
        })
      }
    },

    { path: '/about',
      getComponent: (nextState, cb) => {
        require.ensure([], (require) => {
          cb(null, require('./components/PointSystem').default)
        })
      }
    },

    { onEnter: redirectToDashboard,
      childRoutes: [
        // Unauthenticated routes
        // Redirect to dashboard if user is already logged in
        { path: '/login',
          getComponent: (nextState, cb) => {
            require.ensure([], (require) => {
              cb(null, require('./components/Login/LoginMain').default)
            })
          }
        }
        // ...
      ]
    },

    { onEnter: redirectToLogin,
      childRoutes: [
        // Protected routes that don't share the dashboard UI
        { path: '/verify',
          getComponent: (nextState, cb) => {
            require.ensure([], (require) => {
              cb(null, require('./components/Login/Verify').default)
            })
          }
        }
        // ...
      ]
    },

    { path: '/',
      getComponent: (nextState, cb) => {
        // Share the path
        // Dynamically load the correct component
        if (auth.loggedIn()) {
          return require.ensure([], (require) => {
            cb(null, require('./components/Dashboard').default)
          })
        }
        return require.ensure([], (require) => {
          cb(null, require('./components/MainPage').default)
        })
      },
      indexRoute: {
        getComponent: (nextState, cb) => {
          // Only load if we're logged in
          if (auth.loggedIn()) {
            return require.ensure([], (require) => {
              cb(null, require('./components/Dashboard').default)
            })
          }
          return cb()
        }
      },
      childRoutes: [
        { onEnter: redirectToLogin,
          childRoutes: [
            // Protected nested routes for the dashboard
            { path: '/page2',
              getComponent: (nextState, cb) => {
                require.ensure([], (require) => {
                  cb(null, require('./components/MapComponent').default)
                })
              }
            }
            // ...
          ]
        }
      ]
    }

  ]
}
