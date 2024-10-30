# setFeverGaugePriority

Sets how top the fever gauge should be (render priority).

## Code Information

- **Name**: `setFeverGaugePriority`
- **Scope**: Global
- **PAC Instruction (Binary)**: `25 0c 2a 00`
- **Assembly Address in Memory** : `0x89717fc`

## Parameters

- `(int)priority` *(8 bytes)* : Fever gauge priority (how top it is).

## Example

Here is one example in hex:

```25 0c 2a 00 / 02 00 00 00 / 10 27 00 00```

Which is interpreted as:

```c
setFeverGaugePriority((int)10000)
```

## Code

Ths PAC instruction calls this function (Decompiled by Ghidra):

```c
void FUN_089717fc(int param_1,undefined4 param_2)

{
  undefined4 *puVar1;
  int iVar2;
  
  puVar1 = (undefined4 *)Pac_Get_Param(param_2,0,1,4);
  iVar2 = *(int *)(*(int *)(param_1 + 0x10) + 0x158);
  if ((iVar2 != 0) && (iVar2 = *(int *)(iVar2 + 0x3f28), iVar2 != 0)) {
    (**(code **)(*(int *)(iVar2 + 0x1c) + 0x14))(iVar2,*puVar1);
  }
  PAC::PAC_setCmdId(param_2,0);
  return;
}
```

