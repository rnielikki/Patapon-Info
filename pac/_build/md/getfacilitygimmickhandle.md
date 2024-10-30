# getFacilityGimmickHandle

Gets Gimmick handle from a specific hideout gimmick ID.

## Code Information

- **Name**: `getFacilityGimmickHandle`
- **Scope**: Azito
- **PAC Instruction (Binary)**: `25 1c 09 00`
- **Assembly Address in Memory** : `0x8b4da48`

## Parameters

- `(int *)destination` *(8 bytes)* : Variable to *store* the facility gimmick handle.
- `(int)facilitygimmick_id` *(8 bytes)* : [ID of the facility gimmick](./guide/reference-table.md#facility-ids).

## Example

Here is one example in hex:

```25 1c 09 00 / 04 00 00 00 / 00 00 00 00 / 02 00 00 00 / 00 00 00 00```

Which is interpreted as:

```c
getFacilityGimmickHandle((int *)iVar0, (int)0)
```

## Code

Ths PAC instruction calls this function (Decompiled by Ghidra):

```c
void FUN_Azito__08b4da48(int param_1,undefined4 param_2)

{
  int *piVar1;
  int *piVar2;
  int iVar3;
  
  piVar1 = (int *)Pac_Get_Param(param_2,0,1,4);
  piVar2 = (int *)Pac_Get_Param(param_2,1,1,4);
  if (((*(int *)(param_1 + 0x10) != 0) &&
      (iVar3 = *(int *)(*piVar2 * 0x10 + *(int *)(*(int *)(param_1 + 0x10) + 0x1c4) + 0x1e0),
      iVar3 != 0)) && (iVar3 = *(int *)(iVar3 + 0x148), iVar3 != 0)) {
    *piVar1 = (int)*(short *)(iVar3 + 0x78);
  }
  PAC::PAC_setCmdId(param_2,0);
  return;
}
```

