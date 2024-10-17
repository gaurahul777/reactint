import { useState } from 'react'
import './App.css'
import { useEffect } from 'react'

function App() {

  const [togleCheckforItem,setTogleCheckforItem]=useState(true)
  const [togleCheckforSupplier,setTogleCheckforSupplier]=useState(false)
  const [togleOne, setTogleOne] = useState(false)
  const [showMsg, setShowmsg] = useState(false)
  const [fetchdata, setFetchData] = useState([])
  useEffect(() => {
    fetch('https://apis-technical-test.conqt.com/Api/Item-Supplier/Get-All-Items').then((res) => res.json()).then((data) => {
      setFetchData(data.data.items)
      // console.log(data.data.items);
      console.log(fetchdata);
    })
  // fetchdetails();
}, [])
  
  //  async function fetchdetails() {
  //   const res = await fetch('https://apis-technical-test.conqt.com/Api/Item-Supplier/Get-All-Items');
  //    const data = await res.json();
  //    let dataArr = data?.data?.items;
  //   //  console.log(data.data.items);
  //    setFetchData(dataArr)
  //    console.log(fetchdata);
  // }


  
  function  createData() {
    fetch("https://apis-technical-test.conqt.com/Api/Item-Supplier/Save-Items-Suppliers",
      {
  method: "POST",

  body: JSON.stringify({
 "itemDetails":{
 "itemName":"Mac Book",
 "quantity":"5",
 "unitPrice":"2000",
 "currency":"$",
 "submissionDate":"2021-07-21" 
 },
 "supplier":{
 "supplierName":"Adil",
 "companyName":"Apple",
 "email":"adilIsmail@apple.co",
 "phoneCode":"+91",
 "phoneNumber":"7007402688",
 "countryId":"1",
 "stateId":"1",
 "cityId":"1"
 }
}),
  headers: {
    "Content-type": "application/json; charset=UTF-8"
  }
}).then((response) => response.json())
  .then((json) => console.log(json));
  
  }
  
 
  
  function handleForm(e) {
    e.preventDefault();
    setTimeout(() => {
      setShowmsg(false)
    }, 3000);
    setShowmsg(true)
    createData();


    // console.log('hello from handle');
    // console.log(e);
}

  return (
    <>
      <div className='choose-checkbox_box'>
        <div className='choose-checkbox_box__heading'>
          <div className='choose-checkbox_box__heading--container'>
            <div className='choose-checkbox_box__heading--container___circle'></div>
<h3>Inventory Management System</h3>
          </div>

          <h3>Home</h3>
        </div>
        <div className='choose-checkbox_box__checkboxes'>
          <label>
            <input type='checkbox' onChange={() => {
              setTogleCheckforItem(prev => !prev)
                            setTogleCheckforSupplier(prev => !prev)

              setTogleOne(prev => !prev)

            }} checked={!togleOne}  />Item</label>
          <label>
            <input type='checkbox' onChange={() => {
              setTogleCheckforSupplier(prev => !prev)
                            setTogleCheckforItem(prev => !prev)

                            setTogleOne(prev => !prev)

            }} checked={togleOne}  />Supplier</label>
        </div>

      </div>


      <div className='details-input'>
        {togleCheckforItem ? <h1>Item Details</h1> : <h1>Supplier Details</h1>}

      </div>


        <div className='details-input__form'>
          <form onSubmit={handleForm}>
          
<div className='formAll--data'>
          <div className='details-input__form--container'>
            
            {togleCheckforItem && <div className='details-input__form--input'>
              <div>Item Name</div> <input type='text' placeholder='Enter item name' />
              <div>Max 50 characters</div>
              
            </div>}
           
            {togleCheckforSupplier && <div className='details-input__form--input'>
            <div>Supplier Name</div> <input type='text' placeholder='Enter supplier name' />
          <div>Max 50 characters</div>
          </div>}
            {togleCheckforSupplier && <div className='details-input__form--input'>
            <div>Company Name</div> <input type='text' placeholder='Enter supplier name' />
          <div>Max 50 characters</div>
          </div>}
            {togleCheckforSupplier && <div className='details-input__form--input'>
            <div>country</div>  <select>
              <option>usa</option>
</select>
          <div>select country from list</div>
          </div>}
            {togleCheckforSupplier && <div className='details-input__form--input'>
            <div>state</div>  <select>
              <option>florida</option>
</select>
          <div>select country from list</div>
            </div>}
            {togleCheckforSupplier && <div className='details-input__form--input'>
            <div>City</div> <input type='text' placeholder='Enter city' />
          <div>Max 50 characters</div>
            </div>}
            
            {togleCheckforSupplier && <div className='details-input__form--input'>
            <div>Email</div> <input type='email' placeholder='Enter supplier name' />
          <div>valid email format</div>
          </div>}

            {togleCheckforItem && <div className='details-input__form--input'>
              <div>Quantity</div> <input type='text' placeholder='Enter quantity' />
              <div>Numer Value</div>
            </div>
            }
          
         {togleCheckforItem && <div className='details-input__form--input'>
            <div>Unit Price</div> <input type='text' placeholder='Enter unit price' />
          <div>Numeric value (Usd)</div>
            </div>
            }

          {togleCheckforItem && <div className='details-input__form--input'>
            <div>Item Name</div> <input type='date' placeholder='Select date' />
          <div>Format MM/DD/YYYY</div>
            </div>
            }
         </div>

          <div className='formSubmit-box'>
            {showMsg && <h2 style={{margin:'10px'}}>Submited data</h2>}
            {showMsg && <div style={{margin:'10px'}}>the data submitted by users will be displayed below</div>}
        <input type='submit' value='Save changes'/>
          </div>
          </div>
        </form>

        
      </div> 


      <div className='alldata-details'>
        <div className='alldata-details__head'></div>
<div className='align-data'>
         <div className='alldata-details__showing'>
          <input type='checkbox' />
          <div>Item Name</div>
          <div>Quantity</div>
          <div>City</div>
          <div>Country</div>
          <div>email</div>
          <div>Phon Number</div>

        </div> 

        {
          fetchdata.map((item,index) => {
            return(<div className='alldata-details__showing' key={item.itemId}>
          <input type='checkbox' />
              <div>{item.itemName }</div>
              <div>{ item.quantity}</div>
              <div>{ item.itemName}</div>
              <div>{ item.itemNmae}</div>
          <div>email</div>
          <div>Phon Number</div>

        </div> )
          })
          }
          </div>
</div>        
      
    </>
  )
}

export default App
