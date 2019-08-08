const data =[
      {
            name: 'Robin hood',
            age: 32,
            gender: 'Male',
            Lookingfor: 'female',
            location: 'New delhi',
            image: 'https://randomuser.me/api/portraits/men/72.jpg'
      },
      {
            name: 'jennifer lopez',
            age: 23,
            gender: 'Female',
            Lookingfor: 'Male',
            location: 'Mumbai',
            image: 'https://randomuser.me/api/portraits/women/91.jpg'
      },
      {
            name: 'Albert',
            age: 34,
            gender: 'Male',
            Lookingfor: 'Male',
            location: 'Kolkata',
            image: 'https://randomuser.me/api/portraits/men/62.jpg'
      },

];

const profiles = profileIterater(data);

nextprofile();
//event
document.getElementById('next').addEventListener('click', nextprofile);

function nextprofile(){

      const currentProfile = profiles.next().value;
      if (currentProfile !==undefined) {
            document.getElementById('profileDisplay').innerHTML = `
                  <ul class="list-group">
                        <li class="list-group-item">Name: ${currentProfile.name}</li>
                        <li class="list-group-item">Age: ${currentProfile.age}</li>
                        <li class="list-group-item">Location: ${currentProfile.location}</li>
                        <li class="list-group-item">Preference: ${currentProfile.gender} looking for ${currentProfile.Lookingfor}</li>
                  </ul>
            `;

            document.getElementById('imageDisplay').innerHTML = `
            <img src="${currentProfile.image}">`;
      } else {
              window.location.reload();    
      }
}

//profile Iterator

function profileIterater(profiles){
      let nextIndex = 0;

      return{
            next: function(){
                  return nextIndex < profiles.length ?
                  { value: profiles[nextIndex++], done: false} :
                  { done: true}
             }
      }
}









