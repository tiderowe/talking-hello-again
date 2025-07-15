import { useQuery } from '@tanstack/react-query'
import { patientsApi } from '../api'
import DataTable from '../components/DataTable'

const Patients = () => {
  const { data: patients = [], isLoading, refetch } = useQuery({
    queryKey: ['patients'],
    queryFn: patientsApi.getAll
  })

  const columns = [
    {
      key: 'id',
      label: 'Patient ID'
    },
    {
      key: 'name',
      label: 'Name'
    },
    {
      key: 'email',
      label: 'Email'
    },
    {
      key: 'phone',
      label: 'Phone'
    },
    {
      key: 'dateOfBirth',
      label: 'Date of Birth',
      render: (value: string) => new Date(value).toLocaleDateString()
    },
    {
      key: 'insuranceId',
      label: 'Insurance ID',
      render: (value: string) => value || 'N/A'
    },
    {
      key: 'createdAt',
      label: 'Registered',
      render: (value: string) => new Date(value).toLocaleDateString()
    }
  ]

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold">Patients Management</h1>
        <p className="text-muted-foreground">
          View and manage all registered patients in the hospital system
        </p>
      </div>

      <DataTable
        title="All Patients"
        data={patients}
        columns={columns}
        searchKeys={['name', 'email', 'phone', 'insuranceId']}
        isLoading={isLoading}
        onRefresh={() => refetch()}
      />
    </div>
  )
}

export default Patients