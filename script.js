let arr_cars = [
    {
          id: Math.random(),
          model: 'malibu',
          color: 'white',
          year: 2018,
          price: 30000,
          comp_name: '     GM'
      },
      {
          id: Math.random(),
          model: 'gentra',
          color: 'black',
          year: 2020,
          price: 14000,
          comp_name: "       gM"
      },
      {
          id: Math.random(),
          model: 'spark',
          color: 'white',
          year: 2014,
          price: 5500,
          comp_name: "  GM"
      },
      {
          id: Math.random(),
          model: 'nexia3',
          color: 'red',
          year: 2021,
          price: 10000,
          comp_name: "      GM"
      },
       {
          id:Math.random(),
          model: 'cabolat',
          color: 'white',
          year: 2021,
          price: 12.550,
          comp_name: "GM"
      },
      {
          id:Math.random(),
          model: 'spark',
          color: 'black',
          year: 2022,
          price: 11.000,
          comp_name: "GM"
      },
      {
          id: Math.random(),
          model: 'BMW',
          color: 'Black',
          year: 2016,
          price: 35000,
          comp_name: '    bMW'
      },{
          id: Math.random(),
          model: 'Bentley',
          color: 'Black',
          year: 2019,
          price: 67000,
          comp_name: '      MeRcedes'
      },
         {
          id: Math.random(),
          model: 'nexia',
          color: 'black',
          year: 2019,
          price: 10000,
          comp_name: "GM"
      },
      {
          id: Math.random(),
          model: 'malibu_2',
          color: 'white',
          year: 2020,
          price: 45000,
          comp_name: "GM"
      },
      {
          id: Math.random(),
          model: 'Tesla X',
          color: 'white',
          year: 2021,
          price: 119000,
          comp_name: '       Tesla'
      },
      {
          id: Math.random(),
          model: 'BMW',
          color: 'black',
          year: 2019,
          price: 119000,
          comp_name: 'BMW'
      },
      {
          id: Math.random(),
          model: 'Ferrari',
          color: 'red',
          year: 2020,
          price: 410000,
          comp_name: '   Ferrari'
      },
      {
          id: Math.random(),
          model: 'Spark',
          color: 'white',
          year: 2022,
          price: 10800,
          comp_name: "GM"
      },
      {
          id: Math.random(),
          model: 'malibu',
          color: 'white',
          year: 2018,
          price: 30000,
          comp_name: "GM"
      },
      {
          id: Math.random(),
          model: 'Damas',
          color: 'white',
          year: 2019,
          price: 9100,
          comp_name: "GM"
      }
  ]

  let gm = []
  let bmw = []
  let ferrari = []
  let tesla = []
  let mercedes = []

  for(let item of arr_cars) {
      if(item.comp_name.toLowerCase().trim() === 'gm'){
          gm.push(item)
      }else if(item.comp_name.toLowerCase().trim() === 'bmw'){
            bmw.push(item)
        } else if(item.comp_name.toLowerCase().trim() === 'ferrari'){
            ferrari.push(item)
        } else if(item.comp_name.toLowerCase().trim() === 'tesla'){
            tesla.push(item)
        } else if(item.comp_name.toLowerCase().trim() === 'mercedes'){
            mercedes.push(item)
        }
    }
  console.log(gm, bmw , ferrari, tesla, mercedes);
  