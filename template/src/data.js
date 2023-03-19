const users=[
    {name:'Jaja', premium:true},
    {name:'Igben', premium:false},
    {name:'Victory', premium:true},
    {name:'Adams', premium:true},
    {name:'Kelvin', premium:false},
]

const getPremiumUser=(users)=>{
     return users.filter(user=>user.premium)
}

export {getPremiumUser, users }