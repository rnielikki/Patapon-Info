# cameraSetBattleAngle

Supposed to rotate camera, but seems this doesn't work.

The default angle is 53.0 for both parameters.

## Code Information

- **Name**: `cameraSetBattleAngle`
- **Scope**: Global
- **PAC Instruction (Binary)**: `25 16 96 00`
- **Assembly Address in Memory** : `0x89222a0`

## Parameters

- `(float)Var0` *(8 bytes)*
- `(float)Var1` *(8 bytes)*

## Example

Usage not found for this function.

## Code

Ths PAC instruction calls this function (Decompiled by Ghidra):

```c
void FUN_089222a0(int param_1,undefined4 param_2)

{
  undefined4 *puVar1;
  undefined4 *puVar2;
  undefined4 uVar3;
  
  puVar1 = (undefined4 *)Pac_Get_Param(param_2,0,1,4);
  puVar2 = (undefined4 *)Pac_Get_Param(param_2,1,1,4);
  if ((*(int *)(param_1 + 0x10) != 0) && (*(int *)(*(int *)(param_1 + 0x10) + 0xd8) != 0)) {
    uVar3 = FUN_0890fa6c();
    FUN_0890d738(*puVar1,*puVar2,uVar3);
  }
  PAC::PAC_setCmdId(param_2,0);
  return;
}
```

