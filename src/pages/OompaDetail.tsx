import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import OompaResume from '../components/OompaResume';
import { useOompaDetail } from '../hooks/useOompaDetail';
import { useOompaListActions } from '../hooks/useOompaListActions';
import { GenderLabel } from '../types/oompaTypes';


export default function OompaDetail() {
  const { id } = useParams();
  const { oompaDetail } = useOompaDetail(Number(id));
  const { setFilterTermAction } = useOompaListActions();

  useEffect(() => {
    setFilterTermAction('');
  }, [setFilterTermAction]);

  return (
    oompaDetail ?
      <OompaResume
        name={`${oompaDetail.first_name} ${oompaDetail.last_name}`}
        image={oompaDetail.image}
        gender={GenderLabel[oompaDetail.gender]}
        profession={oompaDetail.profession}
        description={oompaDetail.description} />
      : null
  )
}