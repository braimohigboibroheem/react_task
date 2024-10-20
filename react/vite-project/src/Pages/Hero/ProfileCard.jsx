import './ProfileCard.css'

export const ProfileCard = (props) => {
    return( 
        <div >
  <div className ={ `${props.change}`} >  
    <figure>
    <img className='profileImage' src={props.image}alt="" />


        <figcaption>

<h2> <hr /> {props.heading}</h2>
<p> <hr />  {props.bio}</p>
<p> <hr /> {props.location} <hr /></p>
</figcaption>
</figure>
</div>

</div>
    )
}