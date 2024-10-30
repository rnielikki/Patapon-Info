# getHataPonHandle

Gets handle of the Hatapon.

## Code Information

- **Name**: `getHataPonHandle`
- **Scope**: Global
- **PAC Instruction (Binary)**: `25 16 35 00`
- **Assembly Address in Memory** : `0x891ced8`

## Parameters

- `(int *)destination` *(8 bytes)* : Destination to save the Hatapon handle.

## Remarks

This can be also done with [getPlayerSquadHandle](./getplayersquadhandle.md) (Unit ID 5) and [getUnitHandle](./getunithandle.md).

## Example

Here is one example in hex:

```25 16 35 00 / 08 00 00 00 / 1f 00 00 00```

Which is interpreted as:

```c
getHataPonHandle(((global)int *)giVar31)
```

## Code

Ths PAC instruction calls this function (Decompiled by Ghidra):

```c
void FUN_0891ced8(int param_1,undefined4 param_2)

{
  int *piVar1;
  int iVar2;
  
  piVar1 = (int *)Pac_Get_Param(param_2,0,1,4);
  *piVar1 = -1;
  iVar2 = *(int *)(param_1 + 0x10);
  if (iVar2 == 0) {
    iVar2 = 0;
  }
  else {
    if (iVar2 == 0) {
      iVar2 = 0;
    }
    iVar2 = *(int *)(iVar2 + 0xf8);
    if (iVar2 == 0) {
      iVar2 = 0;
    }
  }
  if (((iVar2 != 0) && (iVar2 = FUN_088a8650(iVar2,0), iVar2 != 0)) &&
     (iVar2 = Get_HataponAddr(iVar2), iVar2 != 0)) {
    *piVar1 = (int)*(short *)(iVar2 + 0x78);
  }
  PAC::PAC_setCmdId(param_2,0);
  return;
}
```

