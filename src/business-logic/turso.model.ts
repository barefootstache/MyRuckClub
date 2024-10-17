export type TursoRequest = {
  type: TursoFetchType,
  stmt?: TursoStatement
};

export type TursoFetchType = 'execute' | 'close';

export type TursoStatement = {
  sql: string,
  args?: TursoArgument[]
};

export type TursoArgument = {
  type: TursoArgumentType,
  value?: string
};

export type TursoArgumentType = 'null' | 'integer' | 'float' | 'text' | 'blob';

export type TursoResponse = {
  baton: string | null,
  base_url: string | null,
  results: TursoResponseResult[]
};

export type TursoResponseResult = {
  type: string,
  response: TursoResponseCargo
};

export type TursoResponseCargo = {
  type: TursoFetchType,
  result?: TursoResponsePackage
};

export type TursoResponsePackage = {
  cols: TursoCol[],
  rows: TursoRow[],
  affect_row_count: number,
  last_insert_rowid: any | null,
  replication_index?: string,
  rows_read: number,
  rows_written: number,
  query_duration_ms: number
};

export type TursoCol = {
  name: string,
  decltype: TursoDeclaredType
};

export type TursoRow = {
  type: TursoRowType,
  value?: string
};

export type TursoDeclaredType = 'TEXT' | 'BOOLEAN' | 'DATETIME';

export type TursoRowType = 'text' | 'integer' | 'null';