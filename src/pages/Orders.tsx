import { useQuery } from '@tanstack/react-query'
import { ordersApi } from '../api'
import DataTable from '../components/DataTable'
import { Badge } from '@/components/ui/badge'

const Orders = () => {
  const { data: orders = [], isLoading, refetch } = useQuery({
    queryKey: ['orders'],
    queryFn: ordersApi.getAll
  })

  const columns = [
    {
      key: 'id',
      label: 'Order ID'
    },
    {
      key: 'patientName',
      label: 'Patient'
    },
    {
      key: 'doctorName',
      label: 'Doctor'
    },
    {
      key: 'type',
      label: 'Type',
      render: (value: string) => (
        <Badge variant="outline">
          {value.replace('_', ' ').toUpperCase()}
        </Badge>
      )
    },
    {
      key: 'description',
      label: 'Description'
    },
    {
      key: 'priority',
      label: 'Priority',
      render: (value: string) => (
        <Badge variant={
          value === 'urgent' ? 'destructive' :
          value === 'high' ? 'default' :
          value === 'medium' ? 'secondary' : 'outline'
        }>
          {value.toUpperCase()}
        </Badge>
      )
    },
    {
      key: 'status',
      label: 'Status',
      render: (value: string) => (
        <Badge variant={
          value === 'completed' ? 'default' :
          value === 'in_progress' ? 'secondary' :
          value === 'cancelled' ? 'destructive' : 'outline'
        }>
          {value.replace('_', ' ').toUpperCase()}
        </Badge>
      )
    },
    {
      key: 'createdAt',
      label: 'Created',
      render: (value: string) => new Date(value).toLocaleDateString()
    }
  ]

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold">Orders Management</h1>
        <p className="text-muted-foreground">
          Track and manage all medical orders including lab tests, prescriptions, and procedures
        </p>
      </div>

      <DataTable
        title="All Orders"
        data={orders}
        columns={columns}
        searchKeys={['patientName', 'doctorName', 'description', 'type', 'status']}
        isLoading={isLoading}
        onRefresh={() => refetch()}
      />
    </div>
  )
}

export default Orders