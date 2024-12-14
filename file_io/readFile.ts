
export const fileLinesToArray = async (absolutePath: string): Promise<Array<string>> => {
  const input = await  Deno.readTextFile(absolutePath)
  return input.trim().split('\n')
}
