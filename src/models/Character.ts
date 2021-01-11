export interface CharacterInterface {
  readonly char_id: number;
  readonly name: string;
  readonly birthday?: string | null;
  readonly occupation: string[] | null;
  readonly img: string;
  readonly status: string;
  readonly nickname: string;
  readonly appearance: number[] | null;
  readonly portrayed: string;
  readonly category: string;
  readonly better_call_saul_appearance?: (number | null)[] | null;
}

export class Character implements CharacterInterface {
  constructor(
    readonly char_id: number,
    readonly name: string,
    readonly birthday: string | null,
    readonly occupation: string[] | null,
    readonly img: string,
    readonly status: string,
    readonly nickname: string,
    readonly appearance: number[] | null,
    readonly portrayed: string,
    readonly category: string,
    readonly better_call_saul_appearance: (number | null)[] | null
  ) {}
}
