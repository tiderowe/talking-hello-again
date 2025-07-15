import { useQuery } from '@tanstack/react-query'
import { doctorsApi } from '../api'
import DataTable from '../components/DataTable'
import { Badge } from '@/components/ui/badge'

const Doctors = () => {
  const { data: doctors = [], isLoading, refetch } = useQuery({
    queryKey: ['doctors'],
    queryFn: doctorsApi.getAll
  })

  const columns = [
    {
      key: 'id',
      label: 'Doctor ID'
    },
    {
      key: 'name',
      label: 'Name'
    },
    {
      key: 'specialty',
      label: 'Specialty'
    },
    {
      key: 'department',
      label: 'Department'
    },
    {
      key: 'licenseNumber',
      label: 'License'
    },
    {
      key: 'experience',
      label: 'Experience',
      render: (value: number) => `${value} years`
    },
    {
      key: 'consultationFee',
      label: 'Fee',
      render: (value: number) => `$${value}`
    },
    {
      key: 'isAvailable',
      label: 'Status',
      render: (value: boolean) => (
        <Badge variant={value ? 'default' : 'secondary'}>
          {value ? 'Available' : 'Unavailable'}
        </Badge>
      )
    },
    {
      key: 'phone',
      label: 'Contact'
    }
  ]

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold">Doctors Management</h1>
        <p className="text-muted-foreground">
          Manage all doctors, their specialties, availability, and contact information
        </p>
      </div>

      <DataTable
        title="All Doctors"
        data={doctors}
        columns={columns}
        searchKeys={['name', 'specialty', 'department', 'licenseNumber']}
        isLoading={isLoading}
        onRefresh={() => refetch()}
      />
    </div>
  )
}

export default Doctors