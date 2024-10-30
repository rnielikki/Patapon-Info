# multiGetScore

Gets the current VS score of a given team.

## Code Information

- **Name**: `multiGetScore`
- **Scope**: Global
- **PAC Instruction (Binary)**: `25 16 11 00`
- **Assembly Address in Memory** : `0x8919ffc`

## Parameters

- `(int)team_side` *(8 bytes)* : Team to get, 0 is blue team and 1 is red team.
- `(int *)score` *(8 bytes)* : Variable to *store* the current VS score.

## Example

Here is one example in hex:

```25 16 11 00 / 02 00 00 00 / 00 00 00 00 / 04 00 00 00 / 00 00 00 00```

Which is interpreted as:

```c
multiGetScore((int)0, (int *)iVar0)
```

## Code

Ths PAC instruction calls this function (Decompiled by Ghidra):

```c
void FUN_08919ffc(int param_1,undefined4 param_2)

{
  int *piVar1;
  undefined4 *puVar2;
  
  piVar1 = (int *)Pac_Get_Param(param_2,0,1,4);
  puVar2 = (undefined4 *)Pac_Get_Param(param_2,1,1,4);
  *puVar2 = *(undefined4 *)
             (*piVar1 * 4 +
              *(int *)(*(int *)(*(int *)(*(int *)(param_1 + 0x10) + 0x2b8) + 0x2c) + 0x58) + 0x424);
  PAC::PAC_setCmdId(param_2,0);
  return;
}
```

