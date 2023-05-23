let object={
 name:"Favorites",
 favBooks:
 [
    {title:"20.000 de leghe sub mari",
     author:"Jules Verne",
     year:1869,
     characters:['Pierre','Aronax','Conseil','Nemo','Anderson']
    },
    { title:"Enders Game",
     author:"Orson Scott Card",
     year:1985,
     characters: ['Ender Wiggin','Valentine Wiggin','Bean,Petra Arkaniaan','Jane']
    }
 ],
  favMovies:
 [
   {title: "Ant-Man and the Wasp:Quantumania",
     year: 2023,
     rating: 6.4,
     review: "Scott Lang and Hope Van Dyne, along with Hank Pym and Janet Van Dyne, explore the Quantum Realm, where they interact with strange creatures and embark on an adventure that goes beyond the limits of what they thought was possible.",
     directors: ["Peyton Reed"],
     writers: ["François Truffaut", "Jean-Luc Godard", "Claude Chabrol"],
     stars: ['Jean-Paul Belmondo', 'Jean Seberg','Daniel Boulanger'],
     genres: ["Aventure,Action"]
    },
    {title: "The Chronicles of Narnia: The Voyage of the Dawn Treader",
     year: 2010,
     rating: 6.3,
     review: "Lucy and Edmund Pevensie return to Narnia with their cousin Eustace where they meet up with Prince Caspian for a trip across the sea aboard the royal ship The Dawn Treader. Along the way they encounter dragons, dwarves, merfolk, and a band of lost warriors before reaching the edge of the world.",
     directors: ["Michael Apted"],
     writers: ['Michael Apted','Andrew Adamson','Philip Steuer'],
     stars: ['Georgie Henley','Skandar Keynes','Ben Barnes','Will Poulter','Tilda Swinton'],
     genres: ['Aventure','Romance']
    },
    {title: "Venom: Let There Be Carnage",
      year: 2021,
      rating: 5.9,
      review: "Eddie Brock attempts to reignite his career by interviewing serial killer Cletus Kasady, who becomes the host of the symbiote Carnage and escapes prison after a failed execution.",
      directors: ["Andy Serkis"],
      writers: ["Andy Serkis"],
      stars: ['Tom Hardy','Michelle Williams','Naomie Harris','Reid Scott','Stephen Graham','Woody Harrelson'],
      genres: ["Comedy", "Crime", "Drama"] 
    },
    {title: "Dead Man",
     year: 1995,
     rating: 7.5,
     review: "On the run after murdering a man, accountant William Blake encounters a strange aboriginal American man named Nobody who prepares him for his journey into the spiritual world.",
     directors: ["Jim Jarmusch"],
     writers: ["Jim Jarmusch"],
     stars: ['Johnny Depp','Gary Farmer','Crispin Glover'],
     genres: ['Adventure','Drama','Fantasy']
   }
  ],
 favSongs:
  [
    {artist: "Michael Jackson",
     title: "Thriller",
     year: 1982,
     genres: ["pop", "post-disco", "funk", "rock"],
     sale: 70000000,
    },
    {artist: "AC/DC",
     title: "Back in Black",
     year: 1980,
     genres: ["hard rock"],
     sale: 50000000,
    },
    {artist: "Whitney Houston",
     title: "The Bodyguard",
     year: 1992,
     genres: ["r&b", "soul", "pop", "soundtrack"],
     sale: 45000000,
    },
    {artist: "Pink Floyd",
     title: "The Dark Side of the Moon",
     year: 1973,
     genres: ["progressive rock"],
     sale: 45000000,

    },
    {artist: "Eagles",
     title: "Their Greatest Hits (1971 - 1975)",
     year: 1976,
     genres: ["country rock", "soft rock", "folk rock"],
     sale: 44000000,
    },
    {artist: "Eagles",
     title: "Hotel California",
     year: 1976,
     genres: ["soft rock"],
     sale: 42000000,
    },
    {artist: "Shania Twain",
     title: "Come On Over",
     year: 1997,
     genres: ["country", "pop"],
     sale: 40000000,
    },
    {artist: "Fleetwood Mac",
     title: "Rumours",
     year: 1977,
     genres: ["soft rock"],
     sale: 40000000,
    }
  ],
};
//1)AverageYearfavBooks
 function averageYear_favBooks()
 { 
 function addYear()
  {
   let add_Year=0
   for(i=0;i<object.favBooks.length;i++)
   {
     let Year=object.favBooks[i].year
     add_Year += Year
   }
   return add_Year
  }
 addYear()

 let averageYear=0
 averageYear=addYear()/i
 return averageYear
}
averageYear_favBooks()

//2)AverageYearfavMovies
function averageYear_favMovies()
 { 
 const addYear=function()
  {
   let add_Year=0
   for(i=0;i<object.favMovies.length;i++)
   {
     let Year=object.favMovies[i].year
     add_Year += Year
   }
   return add_Year
  }
 addYear()

 let averageYear=0
 averageYear=addYear()/i
 return averageYear
}
averageYear_favMovies()

//3)AverageYearfavSongs
const averageYear_favSongs=function()
 { 
 function addYear()
  {
   let add_Year=0
   for(i=0;i<object.favSongs.length;i++)
   {
     let Year=object.favSongs[i].year
     add_Year += Year
   }
   return add_Year
  }
 addYear()

 let averageYear=0
 averageYear=addYear()/i
 return averageYear
}
averageYear_favSongs()

//%Print Average Yars
function print(a){
  console.log(a)
}
print(averageYear_favBooks())
print(averageYear_favMovies())
print(averageYear_favSongs())

//4)AverageRating
function averagerating()
 { 
 const addRating=function()
  {
   let add_rating=0
   for(i=0;i<object.favMovies.length;i++)
   {
     let Rating=object.favMovies[i].rating
     add_rating += Rating
   }
   return add_rating
  }
  addRating()

 let averagerating=0
 averagerating=addRating()/i
 return averagerating
}
averagerating()
//%Print AverageRating
print(averagerating())

//5)AverageSales
const averageSales=function()
 { 
 function addSale()
  {
   let add_Sale=0
   for(i=0;i<object.favSongs.length;i++)
   {
     let Sale=object.favSongs[i].sale
     add_Sale += Sale
   }
   return add_Sale
  }
 addSale()

 let averagesale=0
 averagesale=addSale()/i
 return averagesale
}
averageSales()
//%Print AverageRating
print(averageSales())


//5)LatestOrOldest
const Latest_Book =function(){
  let LatestBook = {}
  for(let i = 0; i < Object.length; i++ ){
    LatestBook += Object.favBooks[i].name
  }
  console.log (LatestBook)
}
Latest_Book()

  












