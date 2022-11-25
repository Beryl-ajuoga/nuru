import './card.css'
 
 
const Card = () => {
 return (
   
      <div className='sms-container'>

            <div className='sms-content'>
               <p>Total SMS</p>
               <br />
               <p>4000</p>
            </div>

            <div className='consumed'>
               <p>Consumed SMS</p>
               <br />
               <p>3000</p>
            </div>

            <div className='total'>
               <p>SMS balance</p>
               <br />
               <p>1000</p>
            </div>
        </div>
 )
}
 
export default Card