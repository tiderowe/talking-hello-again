import { useQuery } from '@tanstack/react-query'
import { pharmacistsApi } from '../api'
import DataTable from '../components/DataTable'

const Pharmacists = () => {
  const { data: pharmacists = [], isLoading, refetch } = useQuery({
    queryKey: ['pharmacists'],
    queryFn: pharmacistsApi.getAll
  })

  const columns = [
    {
      key: 'id',
      label: 'Pharmacist ID'
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
      key: 'licenseNumber',
      label: 'License Number'
    },
    {
      key: 'pharmacyName',
      label: 'Pharmacy'
    },
    {
      key: 'experience',
      label: 'Experience',
      render: (value: number) => `${value} years`
    },
    {
      key: 'specialization',
      label: 'Specialization',
      render: (value: string) => value || 'General'
    }
  ]

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold">Pharmacists Management</h1>
        <p className="text-muted-foreground">
          Manage all licensed pharmacists, their assignments, and specializations
        </p>
      </div>

      <DataTable
        title="All Pharmacists"
        data={pharmacists}
        columns={columns}
        searchKeys={['name', 'email', 'licenseNumber', 'pharmacyName', 'specialization']}
        isLoading={isLoading}
        onRefresh={() => refetch()}
      />
    </div>
  )
}

export default Pharmacists