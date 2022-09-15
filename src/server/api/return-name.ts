export default async (req: any) => {
  const { name } = useQuery(req)
  return {
    data: `Hello ${name}`,
  }
}
