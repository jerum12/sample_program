const fs = require('fs');

fs.readFile('./JS_OTHERS/dataWomen.json', 'utf-8', (err, data) => {
  if (err) {
    console.log('Error reading JSON FIle', err);
    return;
  }

  try {
    const category_women = JSON.parse(data);

    fs.readFile('./JS_OTHERS/dataMen.json', 'utf-8', (err, data) => {
      if (err) {
        console.log('Error reading JSON FIle', err);
        return;
      }

      try {
        const category_men = JSON.parse(data);

        //console.log('category_women', category_women);
        //console.log('category_men', category_men);

        const new_data = [...category_women, ...category_men];

        console.log('all_categories', new_data);
        //const { name, age, email } = jsonData;

        //console.log(name, age, email);
      } catch (error) {
        console.log('Error reading JSON FIle', error);
      }
    });
  } catch (error) {
    console.log('Error reading JSON FIle', error);
  }
});
