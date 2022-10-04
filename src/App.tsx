import * as React from 'react';
import CustomCheckboxGroup, {
  CheckboxOption,
} from './components/form-controls/CustomCheckboxGroup';

const convertContentTypeToCheckboxOption = ({ id, title }: ContentType): CheckboxOption => ({
  value: id,
  label: title,
});

// const convertCheckboxOptionToContentType = ({ value, label }: CheckboxOption): ContentType => ({
//   id: value,
//   title: label,
// });

const contentTypes: ContentType[] = [
  { id: '1', title: 'articles' },
  { id: '2', title: 'video' },
  { id: '3', title: 'q&a' },
  { id: '4', title: 'tasks' },
];

const contentTypeOptions = contentTypes.map(convertContentTypeToCheckboxOption);

const App: React.FC = () => {
  const [selectedContentTypes, setSelectedContentTypes] = React.useState<CheckboxOption[]>([]);

  return (
    <CustomCheckboxGroup
      formLabel="Hobbies"
      name="hobby"
      options={contentTypeOptions}
      value={selectedContentTypes}
      onChange={(_, newSelectedContentTypes) => setSelectedContentTypes(newSelectedContentTypes)}
    />
  );
};

export default App;
