export function sortUpdateAtDesc(before, after) {
  if(before.updated_at > after.updated_at) return -1;
  if(before.updated_at < after.updated_at) return 1;
}
