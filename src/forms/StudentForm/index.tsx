import {
  useGetStudentClassesQuery,
  useGetStudentPartiesQuery,
  useRemoveStudentParticipantMutation,
  useRemoveStudentScheduleMutation,
} from '@/api';
import {DatePickerInput, Typography} from '@/components';
import {ClassItem} from '@/components/classes/ClassItem';
import {PartyItem} from '@/components/parties/PartyItem';
import {isErrorsExist} from '@/helpers';
import {IIndividualClasses, IParties} from '@/store/types';
import {useFormik} from 'formik';
import React, {useEffect} from 'react';
import {ScrollView} from 'react-native';
import {Button, HelperText, TextInput} from 'react-native-paper';
import {styles} from './styles';
import {validationSchema} from './validation';

export const StudentForm = ({
  onSubmit,
  initialValues,
  isEdit,
  loading,

  studentId,
}: any) => {
  const {
    data: classesSchedule,
    isLoading: loadingClassSchedule,
    refetch,
  } = useGetStudentClassesQuery(studentId);
  const {
    data: partyPaticipants,
    isLoading: loadingPartyParticipants,
    refetch: refetchParties,
  } = useGetStudentPartiesQuery(studentId);

  const [removeStudentSchedule] = useRemoveStudentScheduleMutation({});
  const [removeStudentParticipants] = useRemoveStudentParticipantMutation({});

  const buttonText = isEdit ? 'Изменить' : 'Добавить';

  const formik = useFormik({
    initialValues,
    validationSchema,
    onSubmit,
  });

  const {
    values,
    errors,
    handleSubmit,
    handleChange,
    handleBlur,
    setFieldValue,
    resetForm,
  } = formik;

  useEffect(() => {
    return () => {
      resetForm();
    };
  }, [resetForm]);

  const setDate = (item: Date) => {
    setFieldValue('dateOfBirth', item);
  };

  const handleRemoveStudentSchedule = async (classId: number) => {
    await removeStudentSchedule({studentId, classId});
    await refetch();
  };

  const handleRemoveStudentParticipants = async (partyId: number) => {
    await removeStudentParticipants({studentId, partyId});
    await refetchParties();
  };

  const isContinueButtonDisabled = isErrorsExist(errors);

  if (loadingClassSchedule || loadingPartyParticipants) {
    return <></>;
  }

  return (
    <>
      <ScrollView contentContainerStyle={styles.container}>
        <TextInput
          mode="outlined"
          label={'Имя'}
          placeholder={'Введите имя'}
          onChangeText={handleChange('firstName')}
          onBlur={handleBlur('firstName')}
          value={values.firstName}
          style={styles.input}
          error={!!errors?.firstName}
        />
        {errors.firstName && (
          <HelperText type="error" style={styles.error}>
            {errors.firstName.toString()}
          </HelperText>
        )}
        <TextInput
          mode="outlined"
          label={'Фамилия'}
          placeholder={'Введите фамилию'}
          onChangeText={handleChange('lastName')}
          onBlur={handleBlur('lastName')}
          value={values.lastName}
          style={styles.input}
          error={!!errors?.lastName}
        />
        {errors.lastName && (
          <HelperText type="error" style={styles.error}>
            {errors.lastName.toString()}
          </HelperText>
        )}
        <TextInput
          mode="outlined"
          label={'Адрес'}
          placeholder={'Введите адрес'}
          onChangeText={handleChange('address')}
          onBlur={handleBlur('address')}
          value={values.address}
          style={styles.input}
          error={!!errors?.address}
        />
        {errors.address && (
          <HelperText type="error" style={styles.error}>
            {errors.address.toString()}
          </HelperText>
        )}

        <DatePickerInput
          label="Дата рождения"
          placeholder="Введите дату рождения"
          value={values?.dateOfBirth?.toDateString() || ''}
          error={errors.dateOfBirth}
          selectValue={setDate}
        />

        {classesSchedule?.data?.length > 0 ? (
          <>
            <Typography variant="headlineSmall" mb={16}>
              Бронирование классов
            </Typography>
            {classesSchedule.data.map((item: IIndividualClasses) => (
              <ClassItem
                key={item.class_id}
                item={item}
                button={
                  <Button
                    onPress={() => handleRemoveStudentSchedule(item.class_id)}>
                    Отменить
                  </Button>
                }
              />
            ))}
          </>
        ) : (
          <></>
        )}

        {partyPaticipants?.data?.length > 0 ? (
          <>
            <Typography variant="headlineSmall" mb={16}>
              Бронирование вечеринок
            </Typography>
            {partyPaticipants.data.map((item: IParties) => (
              <PartyItem
                key={item.party_id}
                item={item}
                button={
                  <Button
                    onPress={() =>
                      handleRemoveStudentParticipants(item.party_id)
                    }>
                    Отменить
                  </Button>
                }
              />
            ))}
          </>
        ) : (
          <></>
        )}

        <Button
          loading={loading}
          disabled={isContinueButtonDisabled || loading}
          style={styles.button}
          //@ts-ignore
          onPress={handleSubmit}
          mode="contained">
          {buttonText}
        </Button>
      </ScrollView>
    </>
  );
};
