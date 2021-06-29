    // getExpert Function
    window.addEventListener('load', read_dato);
    function read_dato() {
        firebase.auth().onAuthStateChanged(function(user) {
            if (user) {
                
                var functions = firebase.app().functions('europe-west1');

                //getExpertFieldsModels
                var getExpertFieldsModels = functions.httpsCallable('getExpertFieldsModels');getExpertFieldsModels({environment: 'development'})
                .then((result) => {
                    // Read result of the Cloud Function.
                    console.log(result.data);
                    var data = result.data;

                    //Gender Select
                    data.gender.forEach(gender => {
                        let opt = document.createElement('option');
                        opt.value = gender.id;
                        opt.innerText += gender.name.en;
                        genderSelect.appendChild(opt);
                    });

                    //Availability Select
                    data.therapist_availability.forEach(availability => {
                        let opt = document.createElement('option');
                        opt.value = availability.id;
                        opt.innerText += availability.availability.en;
                        availabilitySelect.appendChild(opt);
                    });

                    //Native language Select & Languages Multiselect
                    data.therapist_language.forEach(language => {
                        let opt = document.createElement('option');
                        opt.value = language.id;
                        opt.innerText += language.name.en;
                        nativeLanguageSelect.appendChild(opt);
                    });

                    //Languages Multiselect
                    data.therapist_language.forEach(language => {
                        let opt = document.createElement('option');
                        opt.value = language.id;
                        opt.innerText += language.name.en;
                        languageSelect.appendChild(opt);
                    });

                    //Health insurance(s)
                    data.therapist_health_insurance.forEach(insurance => {
                        let opt = document.createElement('option');
                        opt.value = insurance.id;
                        opt.innerText += insurance.name.en;
                        insuranceSelect.appendChild(opt);
                    });

                    //Appointment types
                    data.appointment_type.forEach(appointment => {
                        let opt = document.createElement('option');
                        opt.value = appointment.id;
                        opt.innerText += appointment.name.en;
                        appointmentSelect.appendChild(opt);
                    });

                    //Client types
                    data.therapist_client.forEach(child => {
                        let opt = document.createElement('option');
                        opt.value = child.id;
                        opt.innerText += child.client.en;
                        clientSelect.appendChild(opt);
                    });

                    //Memberships
                    data.therapist_membership.forEach(child => {
                        let opt = document.createElement('option');
                        opt.value = child.id;
                        opt.innerText += child.membership.en;
                        membershipSelect.appendChild(opt);
                    });

                    //Methods
                    data.therapist_method.forEach(child => {
                        let opt = document.createElement('option');
                        opt.value = child.id;
                        opt.innerText += child.name.en;
                        methodsSelect.appendChild(opt);
                    });

                    //Goals
                    data.profile_goal.forEach(child => {
                        let opt = document.createElement('option');
                        opt.value = child.id;
                        opt.innerText += child.name.en;
                        goalsSelect.appendChild(opt);
                    });

                    //Specializations
                    data.profile_specialisation.forEach(child => {
                        let opt = document.createElement('option');
                        opt.value = child.id;
                        opt.innerText += child.name.en;
                        specializationSelect.appendChild(opt);
                    });

                    //getExpert
                    var getExpert = functions.httpsCallable('getExpert');getExpert({environment: 'development'})
                    .then((result) => {
                        // Read result of the Cloud Function.
                        var data = result.data;
                        console.log(result.data);
                        // Show values in Imput fields
                        nameField.value = data.name;
                        emailField.value = data.email;
                        phoneNumberField.value = data.phoneNumber;
                        genderSelect.value = data.gender;
                        availabilitySelect.value = data.availability;
                        experienceField.value = data.experience;

                        //languageSelect multiselect
                        Array.from(document.querySelector('#languageSelect').options).forEach(opt => {
                            if( data.languages.includes(opt.value)){opt.selected = true;};
                        });
                        nativeLanguageSelect.value = data.nativeLanguage;
                        healthInsurancesField.value = data.healthInsurances;
                        //healthInsuranceSelect multiselect
                        Array.from(document.querySelector('#insuranceSelect').options).forEach(opt => {
                            if( data.healthInsurances.includes(opt.value)){opt.selected = true;};
                        });

                        appointmentTypesField.value = data.appointmentTypes;
                        clientsField.value = data.clients;
                        membershipsField.value = data.memberships;
                        methodsField.value = data.methods;
                        goalsField.value = data.goals;
                        specialisationsField.value = data.specialisations;           
                        aboutmeFieldDE.value = data.aboutMe['de-CH'];
                        aboutmeFieldEN.value = data.aboutMe['en'];
                        seoTitleFieldDE.value = data.seo['de-CH']['title'];
                        seoTitleFieldEN.value = data.seo['en']['title'];
                        seoDescriptionFieldDE.value = data.seo['de-CH']['description'];
                        seoDescriptionFieldEN.value = data.seo['en']['description'];
                        priceFieldDE.value = data.price['de-CH'];
                        priceFieldEN.value = data.price['en'];
                        tooltipPricingFieldDE.value = data.tooltipPricing['de-CH'];
                        tooltipPricingFieldEN.value = data.tooltipPricing['en'];
                        educationFieldDE.value = data.education['de-CH'];
                        educationFieldEN.value = data.education['en'];
                        avatarImage.src = data.avatar.url;
                        audioUrlDE.src = data.audio['de-CH']['url'];
                        audioUrlEN.src = data.audio['en']['url'];
                        
                    })
                    .catch((error) => {
                        // Getting the Error details.
                        console.log(error.code);
                        console.log(error.message);
                        console.log(error.details);
                    });
                    
                })
                .catch((error) => {
                    // Getting the Error details.
                    console.log(error.code);
                    console.log(error.message);
                    console.log(error.details);
                });
            } 
        });
    }
