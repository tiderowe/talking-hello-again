import { useQuery } from '@tanstack/react-query'
import { usersApi } from '../api'
import DataTable from '../components/DataTable'
import { Badge } from '@/components/ui/badge'

const Users = () => {
  const { data: users = [], isLoading, refetch } = useQuery({
    queryKey: ['users'],
    queryFn: usersApi.getAll
  })

  const columns = [
    {
      key: 'id',
      label: 'ID'
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
      key: 'role',
      label: 'Role',
      render: (value: string) => (
        <Badge variant={
          value === 'admin' ? 'destructive' :
          value === 'doctor' ? 'default' :
          value === 'nurse' ? 'secondary' : 'outline'
        }>
          {value.charAt(0).toUpperCase() + value.slice(1)}
        </Badge>
      )
    },
    {
      key: 'isActive',
      label: 'Status',
      render: (value: boolean) => (
        <Badge variant={value ? 'default' : 'secondary'}>
          {value ? 'Active' : 'Inactive'}
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
        <h1 className="text-3xl font-bold">Users Management</h1>
        <p className="text-muted-foreground">
          Manage all system users including administrators, doctors, nurses, and receptionists
        </p>
      </div>

      <DataTable
        title="All Users"
        data={users}
        columns={columns}
        searchKeys={['name', 'email', 'role']}
        isLoading={isLoading}
        onRefresh={() => refetch()}
      />
    </div>
  )
}

export default Users