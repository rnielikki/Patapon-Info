# getCollisionType

Gets [troop type](./guide/reference-table.md#troop-types) of the collider.

## Code Information

- **Name**: `getCollisionType`
- **Scope**: Global
- **PAC Instruction (Binary)**: `25 17 55 00`
- **Assembly Address in Memory** : `0x891736c`

## Parameters

- `(int *)handle_id` *(8 bytes)* : The target [handle](./guide/how-to-get-a-handle.md).
- `(int)troop_type` *(8 bytes)* : [Troop type](./guide/reference-table.md#troop-types) of the collider.

## Example

Here is one example in hex:

```25 17 55 00 / 04 00 00 00 / 01 00 00 00 / 04 00 00 00 / 03 00 00 00```

Which is interpreted as:

```c
getCollisionType((int *)iVar1, (int *)iVar3)
```

## Code

Ths PAC instruction calls this function (Decompiled by Ghidra):

```c
void FUN_0891736c(int param_1,undefined4 param_2)

{
  int *piVar1;
  int *piVar2;
  int iVar3;
  
  piVar1 = (int *)Pac_Get_Param(param_2,0,1,4);
  piVar2 = (int *)Pac_Get_Param(param_2,1,1,4);
  *piVar2 = 4;
  if (*piVar1 != -1) {
    iVar3 = Find_Target_By_HandleID(*(undefined4 *)(param_1 + 0x14),*piVar1,1);
    if (iVar3 == 0) {
      iVar3 = 0;
    }
    *piVar2 = (int)*(char *)(iVar3 + 0x98);
  }
  PAC::PAC_setCmdId(param_2,0);
  return;
}
```

