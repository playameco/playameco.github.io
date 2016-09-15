import React, {Component} from 'react'

class Paper extends Component {
	render(){
		return (
			<div className='material-type type-paper'>
				<h3>Why you Should Recycle Paper</h3>
				<p>Industrialized paper making has an effect on the environment both upstream 
					(where raw materials are acquired and processed) and downstream (waste-disposal 
					impacts). Today, 40% of paper pulp is created from wood (in most modern mills 
					only 9-16% of pulp is made from pulp logs; the rest comes from waste wood that 
					was traditionally burnt). Paper production accounts for about 35% of felled 
					trees, and represents 1.2% of the world's total economic output. Recycling one 
					ton of newsprint saves about 1 ton of wood while recycling 1 ton of printing or 
					copier paper saves slightly more than 2 tons of wood. This is because kraft 
					pulping requires twice as much wood since it removes lignin to produce higher 
					quality fibres than mechanical pulping processes. Relating tons of paper 
					recycled to the number of trees not cut is meaningless, since tree size 
					varies tremendously and is the major factor in how much paper can be made from 
					how many trees. Trees raised specifically for pulp production account for 16% of 
					orld pulp production, old growth forests 9% and second- and third- and more 
					generation forests account for the balance. Most pulp mill operators practice 
					reforestation to ensure a continuing supply of trees. The Programme for the 
					Endorsement of Forest Certification (PEFC) and the Forest Stewardship Council 
					(FSC) certify paper made from trees harvested according to guidelines meant to 
					ensure good forestry practices. It has been estimated that recycling half the 
					world’s paper would avoid the harvesting of 20 million acres (81,000 km²) of 
					forestland.</p>

				<h3>Process of Recyling Paper</h3>
				<p>The process of waste paper recycling involves mixing used paper with water 
					and chemicals to break it down. It is then chopped up and heated, which breaks 
					it down further into strands of cellulose, a type of organic plant material; this 
					resulting mixture is called pulp, or slurry. It is strained through screens, which 
					remove any glue or plastic that may still be in the mixture then cleaned, de-inked, 
					bleached, and mixed with water. Then it can be made into new recycled paper. The 
					share of ink in a wastepaper stock is up to about 2% of the total weight.</p>

				<p className='info-source'><em>Source:</em> 
					<a href='https://en.wikipedia.org/wiki/Paper_recycling'>
					  Wikipedia - Paper Recycling.
					</a>
				</p>
			</div>
			)
	}
}

export default Paper