// functions specific to MARC website

//***********************************************************

// writes the <a ...>anchorText</a> for linking the
// anchor text to a map to the Rockville COB

function mapCobAnchor( targetText, anchorText )
{ 
//   yycobUrl = "http://www.mapquest.com/maps/map.adp?" + 
//             "country=US&address=100+Maryland+Ave&city=Rockville&state=MD"
   
//   cobUrl = "http://maps.google.com/maps?" +
//            "q=100%20maryland%20ave%2C%20rockville%2Cmd&spn=0.043152%2C0.044929"
   cobUrl = "http://maps.google.com/maps/ms?hl=en&safe=off&ie=UTF8&t=h&om=1&msa=0&msid=113744397376088789795.00043b86373903dd1ec89&ll=39.08108,-77.150921&spn=0.005239,0.008819&z=17"
   
   document.write(
      "<a target=\"" + targetText + "\" href=\"" + cobUrl + "\">",
      anchorText,
      "</a>"
   )
   
} // mapCobAnchor

//***********************************************************

// writes the <a ...>anchorText</a> for linking the
// anchor text to a map to the Rockville EOB

function mapEobAnchor( targetText, anchorText )
{
   xxeobUrl = "http://us.rd.yahoo.com/maps//maps/extmap/*-http://maps.yahoo.com//maps_result" + 
             "?name=&ed=91yd7up_0TpMKFR2ucV.AUg33vsHXflM6VySx3WXqFIJuUBW9PT.bdKSgACEhG9Rj2RvZmM4KFE8PipxoYSGp.zPOkwezKkpV_iPUoIm2ZE-&csz=Rockville%2C+MD+20850-2503&desc=&mag=9&ds=n&state=MD&uzip=20850&country=US&BFKey=&resize=s"
   
   eobUrl = "http://www.mapquest.com/maps/map.adp?" + 
             "country=US&address=101+Monroe+St&city=Rockville&state=MD"
   
   document.write(
      "<a target=\"" + targetText + "\" href=\"" + eobUrl + "\">",
      anchorText,
      "</a>"
   )
   
} // mapEobAnchor

//***********************************************************

// writes the <a ...>anchorText</a> for linking the
// anchor text to a map to the Gaithersburg IHOP

function mapIhopAnchor( targetText, anchorText )
{
   xxihopUrl = "http://www.mapquest.com/maps/map.adp?" + 
             "country=US&address=206+N+Frederick+Av&city=Gaithersburg&state=MD"
   
   ihopUrl = "http://maps.google.com/maps?q=206%20n%20frederick%20ave%2Cgaithersburg%2Cmd"
   
   document.write(
      "<a target=\"" + targetText + "\" href=\"" + ihopUrl + "\">",
      anchorText,
      "</a>"
   )
   
} // mapEobAnchor

//***********************************************************

// writes the <a ...>anchorText</a> for linking the
// anchor text to a map to Joe's Place in Gaithersburg, MD

function mapJoesPlaceAnchor( targetText, anchorText )
{
   xxjoesUrl = "http://www.mapquest.com/maps/map.adp?" + 
             "country=US&address=430+N+Frederick+Av&city=Gaithersburg&state=MD"
   
   joesUrl = "http://maps.google.com/maps?q=430%20n%20frederick%20ave%2Cgaithersburg%2Cmd"
   
   document.write(
      "<a target=\"" + targetText + "\" href=\"" + joesUrl + "\">",
      anchorText,
      "</a>"
   )
   
} // mapJoesPlaceAnchor

//***********************************************************

// writes the <a ...>anchorText</a> for linking the
// anchor text to a map to the Ambrosia Grill in Rockville, MD

function mapAmbrosiaGrillAnchor( targetText, anchorText )
{
   ambrosizUrl = "http://maps.google.com/maps?f=q&hl=en&q=802+Hungerford+Dr,+Rockville,+MD"
   
   document.write(
      "<a target=\"" + targetText + "\" href=\"" + ambrosizUrl + "\">",
      anchorText,
      "</a>"
   )
   
} // mapAmbrosiaGrillAnchor
