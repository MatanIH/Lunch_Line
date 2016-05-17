/**
 * Created by h205p2 on 5/11/16.
 */
/*    ArrayList<Restaurant> recommendedRestaurants = new ArrayList<>();

           @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
    setContentView(R.layout.activity_main);
}

    if (restaurant.distance > maxDistance)
    {
        recommendRestaurant = false;
    }
    ArrayList<String> bannedList = new ArrayList<String>();
    for(Restaurant restaurant : bannedList)
    {
        if (restaurant.equals(theotherone))
        {
            recommendRestaurant = false;
        }
    }
    if (restaurant in ArrayList of those recommended in last 4-5 days)
    {
        recommendRestaurant = false;
    }

    if (restaurant.recRestaurant = true)
    {
        recommendedRestaurants.append[restaurant];
    }

    if (multiple restuarants meet criteria)
    {
        restaurant1.want += restaurant1.distance + restaurant1.avgPrice;
        restaurant2.want += restaurant2.distance + restaurant2.avgPrice;
        //make sure want is an object in restaurant class
    ...
        for(int i = 0; i < recommendedRestaurants.size(); i++) {
            for(int j = 0; j < recommendedRestaurants.size(); j++) {
                if(recommendedRestaurants[i].wantValue > recommendedRestaurants[j].wantValue) {
                    //insert j before recommendedRestaurants[i]
                    recommendedRestaurants.add(i-1, recommendedRestaurants[j]);
                }
            }
        }
    }
*/
    //User-Input Factors: money, distance, time, blocked restaurants, recommended in last 4 or 5 days, raining
    //everytime restaurant recommended and user confirms, add it to ArrayList of recommended restaurants
    //and remove oldest restaurant and move all items over by 1 index
    //have button on recommended restaurant page that allows user to ban restaurant from being recommended again
    //have default distance that goes from university to ____

Restaurant(distance, lineWait, avgPrice, want)
{
    this.distance = distance;
    this.lineWait = lineWait;
    this.isBanned = false;
    this.avgPrice = avgPrice;
    this.want = want;
    this.recRestaurant = true;
    this.isCool = function(){return "yes";}
}