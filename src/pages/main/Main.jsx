import React from 'react';
import olympicData from './Olympic_data.json';
import ApplicationsTable from '../../components/table/ApplicationsTable';
import helper from '../../lib/helper';

/*
  name - column title
  key - key of corresponding to column data in dataObject
  order - order of headings
  circle - if passed then we expect that it's medal column and instead of text we have color of medal as data
*/
const columns = [
  {
    name: 'Medal', key: 'medal', order: 1, circle: true,
  },
  {
    name: 'Event', key: 'event', order: 2,
  },
  {
    name: 'Participant', key: 'name', order: 3,
  },
];
/*
  key - key of medal list in SportsList object
  name - displaying name of medal
  color - color of medal to be rendered in table
*/
const medalLists = [{
  key: 'GoldMedalList',
  name: 'Gold medals',
  color: 'gold',
}, {
  key: 'SilverMedalList',
  name: 'Silver medals',
  color: 'silver',
},
{
  key: 'BronzeMedalList',
  name: 'Bronze medals',
  color: 'Coral',
}];

function Main() {
  return (
    <div>
      {olympicData.SportList.map((item, index) => (
        <div key={`table-${index}`}>
          <p className="sport-title">{item.Sport.c_Name}</p>
          { medalLists.filter(({ key }) => item[key] && item[key].length !== 0).map(({ key, name, color }) => (
            <div key={key}>
              <p className="medal-title">{name}</p>
              <ApplicationsTable
                columns={columns.sort((columnX, columnY) => columnX.order - columnY.order)}
                applications={item[key].map(athlete => helper.formatAthlete({ ...athlete, medal: color }))}
              />
            </div>
          ))
            }
        </div>
      ))
      }
    </div>
  );
}

export default Main;
