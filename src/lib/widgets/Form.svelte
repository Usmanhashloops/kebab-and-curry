<script>
  import {fly, fade } from 'svelte/transition';	
  import {validateName, validateEmail, validatePhone} from '$lib/validation';
  export let formTitle = "Form Title"
  export let formMessage = "Send us a message and our team will be in touch"
  export let sendToEmail;
  export let emailMessage = "The following user filled out the form on the contact page"
  
	let hasError = false;
	let isSuccessVisible = false;
  let submitted = false;
  const emailPattern =     /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  const mobilePattern =  /^\+(?:[0-9]●?){6,14}[0-9]$/

	
  const errMessage = "All the fields are mandatory";		
  
  let fields = {
    firstName: '',
    lastName: '',
    email: '',
    phoneNumber: '',
    messageArea: '',
    branchName: ''

  }
  let errors = {
    firstName: '',
    lastName: '',
    email: '',
    phoneNumber: '',
    messageArea: '',
    branchName: ''
  }

  let errorsValid = {
    firstNameValid: true,
    lastNameValid: true,
    emailValid: true,
    phoneNumberValid: true,
    messageAreaValid: true,
    branchName: true
  }
  let valid = false;
  
  
  function validateFirstName() {

    if(validateName(fields.firstName)) {
        errorsValid.firstNameValid = true
    } else {
      errorsValid.firstNameValid = false
    }
  }

  function validateLastName() {

    if(validateName(fields.lastName)) {
        errorsValid.lastNameValid = true
    } else {
      errorsValid.lastNameValid = false
    }

  }

  function validateEmailAddress() {

    if(validateEmail(fields.email)) {
        errorsValid.emailValid = true
    } else {
      errorsValid.emailValid = false
    }
  }
  function validateBranchName() { 
      errorsValid.branchName = true  
  }



  function validatePhoneNumber() {

    // if(validatePhone(fields.phoneNumber)) {
    //   errorsValid.phoneNumberValid = true
    // } else {
    //   errorsValid.phoneNumberValid = false
    // }
    errorsValid.phoneNumberValid = true
  }



	function handleSubmit(e) { 
    valid = true;
    if(fields.firstName.length < 1) {
      errors.firstName = "Please enter your first name."
      errorsValid.firstNameValid = false
    }
    if(fields.lastName.length < 1) {
      errors.lastName = "Please enter your last name"
    }

    if(!emailPattern.test(fields.email) ) {
      errors.lastName = "Please enter a valid email address"
    }

    //  if(!mobilePattern.test(fields.phoneNumber) ) {
    //    console.log('incorrect number')
    //   errors.lastName = "Please enter a valid contact number"
    // }


      formSubmission (
        fields.firstName,
        fields.lastName,
        fields.email,
        fields.phoneNumber,
        fields.messageArea,
        fields.branchName
      )

		isSuccessVisible = true;

		setTimeout(function(){
			isSuccessVisible = false;
		}, 4000);
  }
  


  function formSubmission(firstName, lastName, email, phone, message, branchName) {

    let data = {
        to: "orders.knc@gmail.com, talha@ctrlb.io",
        subject: "A contact form was submitted on the Kabab and Curry website",
        message : emailMessage + `\nFirst Name: ` + firstName + `\nLast Name: ` + lastName +  `\nEmail: `+ email + `\nPhone: ` + phone + `\nMessage : ` + message + `\nBrnach Name : ` + branchName
        }

        console.log(data)

    fetch("https://extraordinary-malabi-4bc6b4.netlify.app/.netlify/functions/api/send_email", {
        method: "POST",
        mode: 'no-cors',
        headers: {'Content-Type': 'application/json'}, 
        body: JSON.stringify(data)
        }).then(res => {
        console.log("Request complete! response:", res);
        });
}

</script>


{#if hasError == true}
		<p class="error-alert">{errMessage}</p>
{:else}
	{#if isSuccessVisible}	
		<p class="error-alert" transition:fade={{duration:150}}>Form Submitted successfully</p>
	{/if}
{/if}

<div class="form-wrapper">
  <form id="surveyForm" class="mt-4" class:submitted on:submit|preventDefault={handleSubmit}>
    <!-- <h3>{formTitle}</h3> -->
  <h4 class="form-title">{formMessage}</h4>
		<div class="form-group">
    <input type="hidden" name="accessKey" value="41ebc86d-26b4-4e48-bcc9-7ec70662cac5"> <!-- Required -->

    <input type="text" class="form-control {errorsValid.firstNameValid ? '' : 'invalid'}" bind:value="{fields.firstName}" on:keyup="{validateFirstName}" placeholder="First name" required>
		</div>

		<div class="form-group">
    <input type="text" class="form-control {errorsValid.lastNameValid ? '' : 'invalid'}" bind:value="{fields.lastName}" on:keyup="{validateLastName}"  placeholder="Last name" required>
    </div> 
    
    <div class="form-group">
			<input type="email" class="form-control {errorsValid.emailValid ? '' : 'invalid'}" bind:value="{fields.email}" on:keyup="{validateEmailAddress}"  placeholder="Email" required name="email">
    </div> 
    
    <div class="form-group">
			<input type="text" class="form-control {errorsValid.phoneNumberValid ? '' : 'invalid'}" bind:value="{fields.phoneNumber}" on:keyup="{validatePhoneNumber}"  placeholder="Contact number" required name="phone">
    </div> 
    <div class="form-group">
      <select name="branch"
      id="branch" 
      bind:value="{fields.branchName}" 
      on:change="{validateBranchName}"  
      required
      >
      <option value="" disabled selected >   Select Resturant Branch Name  </option>
        <option value="Santa Clara">Santa Clara</option>
        <option value="Cupertino">Cupertino</option>
       
        <option value="Kettlee">Kettlee</option>
    </select>
     </div> 
    
    <div class="form-group">
      <textarea rows="4" class="form-control" bind:value="{fields.messageArea}" placeholder="Enter Message" name="message"></textarea>
		</div> 


		<button class="btn btn-full" type="submit" value="Submit" on:click={() => submitted = true} >Submit Request</button>
	</form>
</div>

<link href="https://gist.githubusercontent.com/Ajax30/08899d40e16069cd517b9756dc900acc/raw/04e4f9997245df079fa8500690d1878311115b20/global.css" rel="stylesheet" crossorigin="anonymous">

<style lang="scss">
@import '../../styles/theme.scss';
@import '../../styles/breakpoints.scss';

	.form-wrapper {
	max-width: 600px !important;
	width: 100%;
    margin: 0 auto;
    position: relative;
    margin-bottom: 50px;
	}
	
	h2 {
		margin-top: 0;
  }
  
  .form-title {
    color: $gold;
    text-align: center;
  }
	
	.form-group > *,
	.btn-full {
		width: 100%;
	}
	
	.form-control,
	.btn-full {
		border-radius: 3px;
	}

	.submitted input:invalid {
		border: 1px solid #070;
	}

	.submitted input:focus:invalid {
		outline: 1px solid #c00;
	}
	
	.error-alert {
		border: 1px solid #080 !important;
		padding: 6px;
		text-align: center;
		color: #080;
		border-radius: 3px;
	}
   
  select {
    width: 102% !important;
    border: 1px solid #ccc;
    background: #FFF;
    margin: 0 0 5px;
    margin-bottom: 20px;
    -webkit-appearance: none; /* Remove default arrow in Chrome/Safari */
    -moz-appearance: none; /* Remove default arrow in Firefox */
    appearance: none; /* Remove default arrow in other browsers */
    padding: 10px;
    background-image: url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="%23333"><path d="M6 9l6 6 6-6" /></svg>');
    background-repeat: no-repeat;
    background-position: right 10px center;
    background-size: 16px;
    font-size: 12px;
    padding-left: 10px;
  }
  select:focus {
    outline: none;
    border: 1px solid #ba9c56;
  }
  
  option {
    font-size: 1rem;
    color: #333;
    background-color: #FFF;
    padding: 10px;
    background-clip: content-box; 
  }
  
  /* Hover styles for option elements */
  option:hover {
    background-color: #F2F2F2;
  }
  
  /* Selected option styles */
  option:checked {
    background-color: #E6E6E6;
  }

  #surveyForm input[type="text"],
#surveyForm input[type="email"],
#surveyForm input[type="tel"],
#surveyForm input[type="url"],
#surveyForm textarea,
#surveyForm button[type="submit"] {
  font: 400 12px/16px "Roboto", Helvetica, Arial, sans-serif;
}

#surveyForm {
//   background: #F9F9F9;
  padding-left: 25px;
  padding-right: 25px;
//   margin: 150px 0;
//   box-shadow: 0 0 20px 0 rgba(0, 0, 0, 0.2), 0 5px 5px 0 rgba(0, 0, 0, 0.24);
}

#surveyForm h3 {
  display: block;
  font-size: 30px;
  font-weight: 300;
  margin-bottom: 10px;
  margin-block-start: 0;
  margin-block-end: 0;
}

#surveyForm h4 {
  margin: 5px 0 15px;
  display: block;
  font-size: 13px;
  font-weight: 400;
}

fieldset {
  border: medium none !important;
  margin: 0 0 10px;
  min-width: 100%;
  padding: 0;
  width: 100%;
}

#surveyForm input[type="text"],
#surveyForm input[type="email"],
#surveyForm input[type="tel"],
#surveyForm input[type="url"],
#surveyForm textarea {
  width: 100%;
  border: 1px solid #ccc;
  background: #FFF;
  margin: 0 0 5px;
  padding-top: 10px;
  padding-bottom: 10px;
  padding-left: 10px !important;
  padding-right: 0;
}

#surveyForm input[type="text"],
#surveyForm input[type="email"],
#surveyForm input[type="tel"],
#surveyForm input[type="url"],
#surveyForm textarea {
  width: 100%;
  border: 1px solid #ccc;
  background: #FFF;
  margin: 0 0 5px;
  padding-top: 10px;
  padding-bottom: 10px;
  padding-left: 0;
  padding-right: 0;
  margin-bottom: 20px;
}

// input::placeholder, textarea::placeholder {
//   margin-left: 10px;
//   padding-left: 10px
// }

#surveyForm input[type="text"]:hover,
#surveyForm input[type="email"]:hover,
#surveyForm input[type="tel"]:hover,
#surveyForm input[type="url"]:hover,
#surveyForm textarea:hover {
  -webkit-transition: border-color 0.3s ease-in-out;
  -moz-transition: border-color 0.3s ease-in-out;
  transition: border-color 0.3s ease-in-out;
  border: 1px solid #aaa;
}

#surveyForm textarea {
  height: 100px;
  max-width: 100%;
  resize: none;
}

#surveyForm button[type="submit"] {
  cursor: pointer;
  width: 100%;
  border: none;
  background-color: $gold !important;
  color: #FFF;
  margin: 0 0 5px;
  padding-top: 10px;
  padding-bottom: 10px;
  padding-left: 0;
  padding-right: 0;
  font-size: 15px;
}

button {
    background-color: $gold !important;
    color: white;
    cursor: pointer;
    border: solid 1px $gold;
    height: 50px;

}

button:hover {
   background-color: #fff !important;
   border: solid 1px $gold;
   color: $gold;

  -webkit-transition: background 0.3s ease-in-out;
  -moz-transition: background 0.3s ease-in-out;
  transition: background-color 0.3s ease-in-out;

}

#surveyForm button[type="submit"]:hover {
   background-color: #fff !important;
  -webkit-transition: background 0.3s ease-in-out;

  -moz-transition: background 0.3s ease-in-out;
  transition: background-color 0.3s ease-in-out;
}

#surveyForm button[type="submit"]:active {
  box-shadow: inset 0 1px 3px rgba(0, 0, 0, 0.5);
}

.copyright {
  text-align: center;
}

#surveyForm input:focus,
#surveyForm textarea:focus {
  outline: 0;
  border: 1px solid $gold;
}

::-webkit-input-placeholder {
  color: #888;
}

:-moz-placeholder {
  color: #888;
}

::-moz-placeholder {
  color: #888;
}

:-ms-input-placeholder {
  color: #888;
}

.invalid {
  border: solid 1px red !important;
}

</style>