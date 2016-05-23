/**
 * Created by h205p2 on 5/11/16.
 */
var recommendedRestaurants = [];
var recents = [];
var bannedList = [];
var recRestaurant = true;
var maxDistance; //user input

    if (restaurant.distance > maxDistance)
    {
        restaurant.recRestaurant = false;
    }

    if (restaurant in bannedList)
    {
        restaurant.recRestaurant = false;
    }

    if (restaurant in recents)
    {
        restaurant.recRestaurant = false;
    }

    if (restaurant.recRestaurant = true)
    {
        recommendedRestaurants.push(restaurant);
    }

    for (k = 0; k < recommendedRestaurants.size(); k++)
    {
        recommendedRestaurants[k].notWant = recommendedRestaurants[k].distance + recommendedRestaurants[k].lineWait + recommendedRestaurants[k].avgPrice;


        for(i = 0; i < recommendedRestaurants.size(); i++) {
            for(j = 0; j < recommendedRestaurants.size(); j++) {
                if(recommendedRestaurants[i].want > recommendedRestaurants[j].want) {
                    //insert j before recommendedRestaurants[i]
                    recommendedRestaurants.push(i-1, recommendedRestaurants[j]);
                }
            }
        }
    }

    //User-Input Factors: money, distance, time, blocked restaurants, recommended in last 4 or 5 days, raining
    //everytime restaurant recommended and user confirms, add it to ArrayList of recommended restaurants
    //and remove oldest restaurant and move all items over by 1 index
    //have button on recommended restaurant page that allows user to ban restaurant from being recommended again
    //have default distance that goes from university to ____

Restaurant(distance, lineWait, avgPrice)
{
    this.distance = distance;
    this.lineWait = lineWait; // make lineWait have three options (Short, Medium, Long) that are associated with numbers of significant difference
    this.isBanned = false;
    this.avgPrice = avgPrice;
    this.want = 0;
    this.recRestaurant = true;
    //this.isCool = function(){return "yes";}
}

var bongo = new Restaurant()
var sliver = new Restaurant()