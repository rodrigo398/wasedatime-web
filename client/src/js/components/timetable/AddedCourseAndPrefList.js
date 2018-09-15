import React from 'react';

import AddedCourseAndPrefItem from '../../containers/timetable/AddedCourseAndPrefItem';
import { Wrapper } from '../../styled-components/Wrapper';
import { UnstyledUList } from '../../styled-components/List';
import { media } from '../../utils/styledComponents';

const ExtendedUnstyledUList = UnstyledUList.extend`
  font-size: 14px;
  ${media.tablet`margin-top: 2em;`};
  ${media.phone`margin-top: 2em;`};
`;

const AddedCourseAndPrefList = ({ addedCoursesAndPrefs }) => {
  return (
    <Wrapper>
      <ExtendedUnstyledUList>
        {addedCoursesAndPrefs.map(addedCourseAndPref => (
          <AddedCourseAndPrefItem
            key={addedCourseAndPref.id}
            addedCourseAndPref={addedCourseAndPref}
          />
        ))}
      </ExtendedUnstyledUList>
    </Wrapper>
  );
};

export default AddedCourseAndPrefList;
