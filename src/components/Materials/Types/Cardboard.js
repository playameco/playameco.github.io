import React, {Component} from 'react'

class Cardboard extends Component {
	render(){
		return (
			<div className='material-type type-carboard'>
				<h3>1. Collection</h3>
				<p>Collection is the first step of recycling cardboard. Recyclers and
			 	businesses collect the waste cardboard at designated cardboard collection points.
			 	Majority of the collection points include trash bins, stores, scrap yards, and
			 	commercial outlets that generate cardboard waste. After collection, they are then
			 	measured and hauled to recycling facilities, mostly paper mills. At this point, 
			 	there are certain types of cardboard that are accepted while some are not depending 
			 	on how they were used or manufactured. For instance, cardboard that are waxed and 
			 	coated or used for food packaging are not accepted in most cases as they undergo 
			 	different specialized recycling process.</p>
			 	<h3>2. Sorting</h3>
			 	<p>Once the corrugated boxes arrive at the recycling facility, they are sorted 
			 	according to the materials they are made of. In most cases, they are classified 
			 	into corrugated cardboard and boxboard. Boxboards are the ones that are thin such 
			 	as those used for cardboard drink containers or cereals boxes while corrugated 
			 	boxes are bigger and stiffer commonly used for packaging transport goods. Sorting 
			 	is important since paper mills manufacture different grades of materials based on 
			 	the materials being recovered.</p>
			 	<h3>3. Shredding and Pulping</h3>
			 	<p>After sorting is done, the next step is shredding then pulping follows. 
			 	Shredding is done to break down the cardboard paper fibers into minute pieces. 
			 	Once the material is finely shredded into pieces, it is mixed with water and 
			 	chemicals to breakdown the paper fibers that turn it into a slurry substance. 
			 	This process is what is termed as pulping. The pulped material is then blended 
			 	with new pulp, generally from wood chips that ultimately help the resulting 
			 	substance to solidify and become firmer.</p>
			 	<h3>4. Filtering, conterminal removal and De-Inking</h3>
			 	<p>The pulpy material is then taken through a comprehensive filtering process to 
			 	get rid of all the foreign materials present as well as impurities such as strings, 
			 	tape or glue. The pulp further goes into a chamber where contaminants like plastics 
			 	and metals staples are removed through a centrifuge-like process. Plastics float on 
			 	top while the heavy metal staples fall to the bottom after which they are 
			 	eliminated. The next process, de-inking, involves putting the pulp in a floatation 
			 	device made up of chemicals that takes away any form of dyes or ink via a series of 
			 	filtering and screening. This step is also called the cleaning process as it cleans 
			 	the pulp thoroughly to ensure it is ready for the final processing stage.</p>  
				<h3>5. Finishing for reuse</h3>
				<p>At this stage, the cleaned pulp is blended with new production materials 
				after which, it is put to dry on a flat conveyor belt and heated cylindrical 
				surfaces. As the pulp dries, it is passed through an automated machine that 
				press out excess water and facilitates the formation of a long rolls of solid 
				sheet from the fibers called linerboards and mediums. The linerboards are glued 
				together, layer by layer to make a new piece of cardboard. In other cases, the 
				medium is used as the corrugated sheet which is taken through two huge metal 
				rolls with teeth to give it the ridges. Linerboards are then glued to the medium 
				as the thin outer covering. Alternatively, the linerboards and mediums are ferried 
				to boxboard manufacturers where the manufacturing process is completed by use of 
				machines that shape and create crease along pattern folds to make the boxes used 
				for packaging or transporting products.</p>
				<p className='info-source'><em>Source:</em> 
					<a href='http://www.corrugated.org/upload/files/FBA_Handbook_recyclingProcess.pdf'>
					  Corrugated.org - Corrugated Recycling Process.
					</a>
				</p>
			</div>
			)
	}
}

export default Cardboard