# setHitPoint

Sets current stamina of an object.

## Code Information

- **Name**: `setHitPoint`
- **Scope**: Global
- **PAC Instruction (Binary)**: `25 17 2a 00`
- **Assembly Address in Memory** : `0x89136c0`

## Parameters

- `(int *)handle` *(8 bytes)* : [Handle of the object](./guide/how-to-get-a-handle.md) to set the current stamina.
- `(int)stamina` *(8 bytes)* : Amount of stamina to set.

## Example

Here is one example in hex:

```25 17 2a 00 / 08 00 00 00 / 5b 00 00 00 / 04 00 00 00 / 03 00 00 00```

Which is interpreted as:

```c
setHitPoint(((global)int *)giVar91, (int *)iVar3)
```

## Code

Ths PAC instruction calls this function (Decompiled by Ghidra):

```c
void FUN_089136c0(int param_1,undefined4 param_2)

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
    FUN_088984bc(iVar3,*puVar2);
  }
  PAC::PAC_setCmdId(param_2,0);
  return;
}
```

