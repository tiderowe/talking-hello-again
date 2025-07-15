import { useQuery } from '@tanstack/react-query'
import { pharmaciesApi } from '../api'
import DataTable from '../components/DataTable'
import { Badge } from '@/components/ui/badge'

const Pharmacies = () => {
  const { data: pharmacies = [], isLoading, refetch } = useQuery({
    queryKey: ['pharmacies'],
    queryFn: pharmaciesApi.getAll
  })

  const columns = [
    {
      key: 'id',
      label: 'Pharmacy ID'
    },
    {
      key: 'name',
      label: 'Name'
    },
    {
      key: 'location',
      label: 'Location'
    },
    {
      key: 'address',
      label: 'Address'
    },
    {
      key: 'phone',
      label: 'Phone'
    },
    {
      key: 'licenseNumber',
      label: 'License'
    },
    {
      key: 'operatingHours',
      label: 'Hours'
    },
    {
      key: 'isActive',
      label: 'Status',
      render: (value: boolean) => (
        <Badge variant={value ? 'default' : 'secondary'}>
          {value ? 'Active' : 'Inactive'}
        </Badge>
      )
    }
  ]

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold">Pharmacies Management</h1>
        <p className="text-muted-foreground">
          Manage all pharmacy locations, operating hours, and contact details
        </p>
      </div>

      <DataTable
        title="All Pharmacies"
        data={pharmacies}
        columns={columns}
        searchKeys={['name', 'location', 'address', 'licenseNumber']}
        isLoading={isLoading}
        onRefresh={() => refetch()}
      />
    </div>
  )
}

export default Pharmacies