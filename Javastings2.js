function checkCreds()
{
    var FirstName = document.getElementById("name").value;/*Links each var to a string!*/
    var LastName = document.getElementById("lastname").value;
    var ZipCode = document.getElementById("zipcode").value;
    var fullname = FirstName + LastName;
   

/*Making alerts and rules for the form to be filled out, and giving a location to go to once right.*/
 if (fullname.length <20) 
  {
    if (ZipCode.length == 5)
    {
  
     location.replace("one-piece.gif");
    }
    
    else
    {
     alert("Zip is Invalid")
    }
  }
  
  else 
  {
      alert("Name Lenght is Invalid")
  }
   

    
}