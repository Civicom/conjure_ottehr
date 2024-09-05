import { FC, useState } from 'react';
import { MedicalHistoryDoubleCard } from '../MedicalHistoryDoubleCard';
import { AdditionalQuestionsPatientColumn } from './AdditionalQuestionsPatientColumn';
import {
  AdditionalQuestionsProviderColumn,
  AdditionalQuestionsProviderColumnSkeleton,
} from './AdditionalQuestionsProviderColumn';
import { getSelectors } from '../../../../../shared/store/getSelectors';
import { useAppointmentStore } from '../../../../state';

export const AdditionalQuestionsCard: FC = () => {
  const [isAdditionalQuestionsCollapsed, setIsAdditionalQuestionsCollapsed] = useState(false);
  const { isChartDataLoading } = getSelectors(useAppointmentStore, ['isChartDataLoading']);
    {/* label="Additional questions" */}

  return (
    
    <MedicalHistoryDoubleCard
      label="Notes"
      collapsed={isAdditionalQuestionsCollapsed}
      onSwitch={() => setIsAdditionalQuestionsCollapsed((state) => !state)}
      patientSide={<AdditionalQuestionsPatientColumn />}
      providerSide={
        isChartDataLoading ? <AdditionalQuestionsProviderColumnSkeleton /> : <AdditionalQuestionsProviderColumn />
      }
    />
  );
};
