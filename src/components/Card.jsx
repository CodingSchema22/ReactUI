const Card = ({data}) => {
  return (
    <>
    <div className="box-1">
        <div className="img">
        <img src={data.image} alt=""/>
        </div>
        <div className="round">
          <h1>{data.id}</h1>
        </div>
<p>
    Lorem ipsum dolor. Quam autem sint corporis harum velit quas ex, inventore dolor incidunt cumque, accusantium aliquam 
    </p>
   
   <div className="button">
    <p>View Profile</p>
 <div className="circle">
  <h3></h3>
 </div>
   </div>
    </div>
    </>
  )
}

export default Card