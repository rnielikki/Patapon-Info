# getEquipSummonType

Gets equipped summon from a specific (blue or red) side.

## Code Information

- **Name**: `getEquipSummonType`
- **Scope**: Global
- **PAC Instruction (Binary)**: `25 0c 2c 00`
- **Assembly Address in Memory** : `0x89718f4`

## Parameters

- `(int)team` *(8 bytes)* : 0 is blue team, 1 is red team.
- `(int *)destination` *(8 bytes)* : Address *to store* the [summon ID](./guide/reference-table.md#summon-ids).

## Example

Here is one example in hex:

```25 0c 2c 00 / 04 00 00 00 / 0a 00 00 00 / 04 00 00 00 / 00 00 00 00```

Which is interpreted as:

```c
getEquipSummonType((int *)iVar10, (int *)iVar0)
```

## Code

Ths PAC instruction calls this function (Decompiled by Ghidra):

```c
void FUN_089718f4(undefined4 param_1,undefined4 param_2)

{
  int *piVar1;
  undefined4 *puVar2;
  
  piVar1 = (int *)Pac_Get_Param(param_2,0,1,4);
  puVar2 = (undefined4 *)Pac_Get_Param(param_2,1,1,4);
  *puVar2 = *(undefined4 *)(&Summon_Type + *piVar1 * 4);
  PAC::PAC_setCmdId(param_2,0);
  return;
}
```

