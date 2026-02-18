function getArea(width, height) {  
    return width * height;
}

console.log(getArea(2, 3)) 

let area = getArea(3, 3)
console.log(area)

let hotel = {
    name: 'Quay',
    rooms: 40,
    booked: 25,
    gym: true,
    roomTypes: ['twin', 'double', 'suite'],
    checkAvailability: function() {
      return this.rooms - this.booked;
    }
  };

  let object_name = hotel.name 
  console.log(object_name)
  console.log(hotel.rooms)

  let object_gym = hotel['gym']
  console.log(object_gym)
  console.log(hotel['booked'])

  console.log("This is availability:")
  let check_availability = hotel.checkAvailability()
  console.log(check_availability)

  hotel.name = "Park"

  console.log(hotel)
  console.log(hotel.name)



  