import {
  useAddClassMutation,
  useGetGroupClassesQuery,
  useGetIndividualClassesQuery,
  useUpdateClassMutation,
} from '@/api';
import {useGetClassTypesQuery} from '@/api/classTypes';
import {ScreenContainer} from '@/components';
import {ClassForm} from '@/forms';
import {useNavigation, useRoute} from '@react-navigation/native';
import React from 'react';

export const EditClassScreen = () => {
  const route = useRoute<any>();
  const navigation = useNavigation();

  const {classData, isEdit, selectedClass} = route.params;

  const {isLoading, refetch} = useGetClassTypesQuery({});
  const [updateClass] = useUpdateClassMutation({});
  const [addClass] = useAddClassMutation({});
  const {refetch: refetchIndividual} = useGetIndividualClassesQuery({});
  const {refetch: refetchGroup} = useGetGroupClassesQuery({});

  const initialValues = {
    className: classData?.class_name ? classData?.class_name : '',
    dayOfWeek: classData?.day_of_week ? classData?.day_of_week : '',
    startTime: classData?.start_time ? classData?.start_time : '',
    endTime: classData?.end_time ? classData?.end_time : '',
    typeId: classData?.pure_type_id ? classData?.pure_type_id : '',
  };

  const onSubmit = async (values: any) => {
    const data = {
      classData: {
        class_name: values.className,
        day_of_week: values.dayOfWeek,
        start_time: values.startTime,
        end_time: values.endTime,
        type_id: +values.typeId,
      },
      type: selectedClass,
    };

    if (isEdit) {
      await updateClass({
        classData: {...data.classData, class_id: classData?.class_id},
      });
    } else {
      await addClass(data);
    }

    await refetchGroup();
    await refetchIndividual();

    navigation.goBack();
  };

  if (isLoading) {
    return <></>;
  }

  return (
    <ScreenContainer>
      <ClassForm
        initialValues={initialValues}
        isEdit={isEdit}
        onSubmit={onSubmit}
        refetchTypes={refetch}
      />
    </ScreenContainer>
  );
};
