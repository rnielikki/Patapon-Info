# getFeverGaugePriority

Gets how top the fever gauge should be (render priority).

## Code Information

- **Name**: `getFeverGaugePriority`
- **Scope**: Global
- **PAC Instruction (Binary)**: `25 0c 2b 00`
- **Assembly Address in Memory** : `0x8971874`

## Parameters

- `(int *)priority` *(8 bytes)* : Variable to *store* the fever gauge priority (how top it is).

## Example

Here is one example in hex:

```25 0c 2b 00 / 04 00 00 00 / 00 00 00 00```

Which is interpreted as:

```c
getFeverGaugePriority((int *)iVar0)
```

## Code

Ths PAC instruction calls this function (Decompiled by Ghidra):

```c
void FUN_08971874(int param_1,undefined4 param_2)

{
  undefined4 *puVar1;
  undefined4 uVar2;
  int iVar3;
  
  puVar1 = (undefined4 *)Pac_Get_Param(param_2,0,1,4);
  iVar3 = *(int *)(*(int *)(param_1 + 0x10) + 0x158);
  *puVar1 = 0;
  if ((iVar3 != 0) && (iVar3 = *(int *)(iVar3 + 0x3f28), iVar3 != 0)) {
    uVar2 = (**(code **)(*(int *)(iVar3 + 0x1c) + 0x10))();
    *puVar1 = uVar2;
  }
  PAC::PAC_setCmdId(param_2,0);
  return;
}
```

