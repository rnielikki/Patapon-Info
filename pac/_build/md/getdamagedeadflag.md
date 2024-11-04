# getDamageDeadFlag

Checks if the target is dead.

## Code Information

- **Name**: `getDamageDeadFlag`
- **Scope**: Global
- **PAC Instruction (Binary)**: `25 17 5c 00`
- **Assembly Address in Memory** : `0x89179d4`

## Parameters

- `(int *)handle` *(8 bytes)* : The handle ID to check if the target is dead.
- `(int *)is_dead` *(8 bytes)* : 1 if the target is dead. 0 if the unit is alive.

## Example

Here is one example in hex:

```25 17 5c 00 / 04 00 00 00 / 40 00 00 00 / 04 00 00 00 / 00 00 00 00```

Which is interpreted as:

```c
getDamageDeadFlag((int *)iVar64, (int *)iVar0)
```

## Code

Ths PAC instruction calls this function (Decompiled by Ghidra):

```c
void FUN_089179d4(int param_1,undefined4 param_2)

{
  undefined4 *puVar1;
  uint *puVar2;
  int iVar3;
  
  puVar1 = (undefined4 *)Pac_Get_Param(param_2,0,1,4);
  puVar2 = (uint *)Pac_Get_Param(param_2,1,1,4);
  *puVar2 = 0;
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
    *puVar2 = (uint)(*(byte *)(iVar3 + 0x12) | *(byte *)(iVar3 + 0x11));
  }
  PAC::PAC_setCmdId(param_2,0);
  return;
}
```

