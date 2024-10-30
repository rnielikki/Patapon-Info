# setBossRetreatPos

Sets the retreating position of the boss. Used in Patapon 2, cannot guarantee to work in Patapon 3.

## Code Information

- **Name**: `setBossRetreatPos`
- **Scope**: Global
- **PAC Instruction (Binary)**: `25 21 0e 00`
- **Assembly Address in Memory** : `0x89b18d8`

## Parameters

- `(int)unique_id` *(8 bytes)* : ID from [setReqActorUniqueId](./setreqactoruniqueid.md). Usually it is 100 (0x64) in 1v1 DLC bosses.
- `(float)position` *(8 bytes)* : Position to retreat.

## Example

Usage not found for this function.

## Code

Ths PAC instruction calls this function (Decompiled by Ghidra):

```c
void FUN_089b18d8(int param_1,undefined4 param_2)

{
  undefined4 *puVar1;
  undefined4 *puVar2;
  int iVar3;
  
  puVar1 = (undefined4 *)Pac_Get_Param(param_2,0,1,4);
  puVar2 = (undefined4 *)Pac_Get_Param(param_2,1,1,4);
  iVar3 = *(int *)(param_1 + 0x10);
  if (iVar3 == 0) {
    iVar3 = 0;
  }
  else {
    if (iVar3 == 0) {
      iVar3 = 0;
    }
    iVar3 = Get_Squad_From_ReqUniqueID(*(undefined4 *)(iVar3 + 0xf8),*puVar1);
    if (iVar3 == 0) {
      iVar3 = 0;
    }
    else {
      iVar3 = FUN_0896d6e0(*(undefined4 *)(iVar3 + 0x708));
      if (iVar3 == 0) {
        iVar3 = 0;
      }
    }
  }
  if (iVar3 != 0) {
    *(undefined4 *)(iVar3 + 0x32c) = *puVar2;
  }
  PAC::PAC_setCmdId(param_2,0);
  return;
}
```

