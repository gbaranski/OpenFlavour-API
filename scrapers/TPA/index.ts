import request from 'request';
import cherrioModule from 'cheerio';

request(
  {
    method: 'GET',
    url: 'https://shop.perfumersapprentice.com/specsheetlist.aspx',
  },
  (err, res, body) => {
    const $ = cherrioModule.load(body);

    const flavors = [{}];

    $('tr').each(function() {
      // @ts-ignore
      const flavor = $(this)
        .children()
        .first();
      flavors.push({
        name: flavor.text().replace(/(\r\n|\n|\r)/gm, ''),
      });
    });
    console.log(flavors);
  },
);
