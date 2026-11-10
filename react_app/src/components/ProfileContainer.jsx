import ProfileCard from "./ProfileCard";

// function ProfileContainer(){
//     const profiles = [
//         {
//             name: 'Alex',
//             age: 25,
//             bio:'A software engineer who loves hacking'
//     },
//     {
//         name: 'Taylor',
//         age: 30,
//         bio:'A designer passionate about photography'
//     }
// ];
//     return(
//         <div className="profile-container">
//             {
//                 profiles.map()=> ProfileCard
//             }
//         </div>
//     )
// }

function ProfileContainer(){
    return(
        <div className="profile-container">
            <ProfileCard
            name= "Alex"
            age= {25}
            bio= "A software engineer who loves hacking"
            />
            <ProfileCard
             name= "Taylor"
             age= {30}
             bio= "A designer passionate about photography"
        />
        </div>
    )
}

export default ProfileContainer;