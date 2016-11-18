 ///////////////list view/////////////
 // var makeListview=function(jsondata)
 // {
 	 // var tabledata=[];
 	 // Ti.API.info(jsondata.data.length);
 	// for (var i=0; i < jsondata.data.length; i++) {
		// //alert(jsondata.data[i]);
	  // var car=jsondata.data[i];
   // //var carSection = Ti.UI.createListSection({ headerTitle:car.manufacturer}); 
    // // $.carname=car.manufacturer;   
// 
	// }
//     
 	// $.index.open();
 // };
 
 
 /////////////////////////
 

function make_list(jsondata){
var plainTemplate = {
    childTemplates: [
        {                            // Image justified left
            type: 'Ti.UI.ImageView', // Use an image view for the image
            bindId: 'pic',           // Maps to a custom pic property of the item data
            //onclick:web,
            properties: {            // Sets the image view properties
                width: '50dp', height: '50dp', left: 0
            }
        },
        {                            // Title
            type: 'Ti.UI.Label',     // Use a label for the title
            bindId: 'title',         // Maps to a custom title property of the item data
            properties: {            // Sets the label properties
                color: 'black',
                font: { fontFamily:'Arial', fontSize: '20dp', fontWeight:'bold' },
                left: '60dp', top: 0,
            },
        },
        {                            // Subtitle
            type: 'Ti.UI.Label',     // Use a label for the subtitle
            bindId: 'subtitle',      // Maps to a custom subtitle property of the item data
            properties: {            // Sets the label properties
                color: 'gray',
                font: { fontFamily:'Arial', fontSize: '14dp' },
                left: '60dp', top: '25dp',
              
            }
        },{                            // Subtitle
            type: 'Ti.UI.Label',     // Use a label for the subtitle
            bindId: 'url',      // Maps to a custom subtitle property of the item data
            properties: {            // Sets the label properties
                color: 'gray',
                font: { fontFamily:'Arial', fontSize: '14dp' },
                right:"0", top: '25dp',accessibilityHidden :'true',
            }
        }
    ],
    // Binds a callback to the click event, which catches events bubbled by the view subcomponents.
    events: {click: web }
};

// The following JSON API calls copy the plainTemplate object minus functions.
// This method of copying an object is simple but not quick.
// If performance is a factor, create your own method to copy an object.


var listView = Ti.UI.createListView({
    // Maps plainTemplate to 'uncheck' and redTemplate to 'check' 
   // templates: { 'uncheck': plainTemplate, 'check': redTemplate },
     templates: { 'uncheck': plainTemplate },
    // Use 'uncheck', that is, the plainTemplate created earlier for all items
    // Can be overridden by the item's template property
   defaultItemTemplate: 'uncheck'
});

var data = [];
for (var i = 0; i < jsondata.data.length; i++) {
	var car=jsondata.data[i];
	Ti.API.info(car);
    data.push({
        // Maps to the title component in the template
        // Sets the text property of the Label component
        title : { text: car.manufacturer },
        // Maps to the subtitle component in the template
        // Sets the text property of the Label component
        subtitle : { text : car.model },
        url:car.wiki,
        // Maps to the pic component in the template
        // Sets the image property of the ImageView component
        pic : { image :"https://raw.githubusercontent.com/SenchaArchitect/CarListings/master/CarListings/data/"+car.img},
      //  Sets the regular list data properties
        // properties : {
            // itemId: car.wiki,
           // accessoryType: Ti.UI.LIST_ACCESSORY_TYPE_NONE,
        // }
    });
}

var section1 = Ti.UI.createListSection();
section1.setItems(data);
listView.sections = [section1];

// Modified version of the `itemclick` event listener
// Changes the item template rather than the list item's color property
function web (e) {
    var item = section1.getItemAt(e.itemIndex);
    Ti.API.info(item.url);
 var webview = Titanium.UI.createWebView({url:item.url});
    var window = Titanium.UI.createWindow();
    window.add(webview);
    window.open({modal:true});   
 
   alert("hii");
} 

$.index.add(listView);
$.index.open();
}
 Alloy.Globals.someGlobalFunction("https://raw.githubusercontent.com/SenchaArchitect/CarListings/master/CarListings/data/cars.json",make_list);
 
// $.index.open();