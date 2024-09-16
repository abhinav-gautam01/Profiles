export function Profile({profiles}){
return(
    <div>
        {profiles.map(function (profile)
        {  return(  <div>
            <h1>{profile.name}</h1>
            <p>{profile.description}</p>
            <p>{profile.twitter}</p>
            <p>{profile.linkedin}</p>
            </div>
        )

        })}
    </div>
)
}