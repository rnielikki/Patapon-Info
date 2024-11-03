# setMaxHitPoint

Sets maximum stamina of an object.

## Code Information

- **Name**: `setMaxHitPoint`
- **Scope**: Global
- **PAC Instruction (Binary)**: `25 17 29 00`
- **Assembly Address in Memory** : `0x89135f4`

## Parameters

- `(int *)handle` *(8 bytes)* : [Handle of the object](./guide/how-to-get-a-handle.md) to set the max stamina.
- `(int)stamina` *(8 bytes)* : Amount of stamina to set.

## Example

Here is one example in hex:

```25 17 29 00 / 08 00 00 00 / 7f 00 00 00 / 02 00 00 00 / a0 86 01 00```

Which is interpreted as:

```c
setMaxHitPoint(((global)int *)giVar127, (int)100000)
```

## Code

Ths PAC instruction calls this function (Decompiled by Ghidra):

```c
void FUN_089135f4(int param_1,undefined4 param_2)

{
  undefined4 *puVar1;
  undefined4 *puVar2;
  int iVar3;
  
  puVar1 = (undefined4 *)Pac_Get_Param(param_2,0,1,4);
  puVar2 = (undefined4 *)Pac_Get_Param(param_2,1,1,4);
  if (param_1 == 0) {
    iVar3 = 0;
  }
  else {
    iVar3 = Find_Target_By_HandleID(*(undefined4 *)(param_1 + 0x14),*puVar1,1);
    if (iVar3 == 0) {
      iVar3 = 0;
    }
    if (iVar3 == 0) {
      iVar3 = 0;
    }
    else {
      iVar3 = *(int *)(iVar3 + 0xcc);
      if (iVar3 == 0) {
        iVar3 = 0;
      }
    }
  }
  if (iVar3 != 0) {
    FUN_088985f4(iVar3,*puVar2);
  }
  PAC::PAC_setCmdId(param_2,0);
  return;
}
```

