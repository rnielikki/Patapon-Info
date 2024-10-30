# saveMS

Saves current save data. This does not save system data. **Use with [getResultSaveMs](./getresultsavems.md) to stop any instruction execution while saving**.

## Code Information

- **Name**: `saveMS`
- **Scope**: Azito
- **PAC Instruction (Binary)**: `25 1c 1d 00`
- **Assembly Address in Memory** : `0x8b4f790`

## Parameters

- `(int)debug_level` *(8 bytes)* : **0 is regular save**. 1 and 2 are reserved for debugging.
- `(bool)Var0` *(8 bytes)* : Can keep 0.

## Example

Here is one example in hex:

```25 1c 1d 00 / 02 00 00 00 / 00 00 00 00 / 02 00 00 00 / 00 00 00 00```

Which is interpreted as:

```c
saveMS((int)0, (int)0)
```

This is an example how to save the data properly.

```c
0000A504  251C1D00:saveMS(2:0, 2:0)
0000A518  25000200:cmd_jmp(1:A554)
  0000A554  25000F00:cmd_waitFrame(2:1)
  0000A560  251C1E00:getResultSaveMS(4:0)
  0000A56C  25001D00:cmd_ifAND(4:0, 2:1, 1:A554)
  0000A584  25000100:cmd_end()```
```

## Code

Ths PAC instruction calls this function (Decompiled by Ghidra):

```c
void FUN_Azito__08b4f790(int param_1,undefined4 param_2)

{
  undefined4 *puVar1;
  int *piVar2;
  int iVar3;
  undefined4 uVar4;
  undefined4 uVar5;
  
  puVar1 = (undefined4 *)Pac_Get_Param(param_2,0,1,4);
  uVar5 = *puVar1;
  piVar2 = (int *)Pac_Get_Param(param_2,0,1,4);
  iVar3 = *piVar2;
  if (*(int *)(param_1 + 0x10) != 0) {
    uVar4 = *(undefined4 *)(*(int *)(param_1 + 0x10) + 0x204);
    FUN_Azito__08b50db0(uVar4,uVar5);
    FUN_Azito__08b51158(uVar4,iVar3 != 0);
  }
  PAC::PAC_setCmdId(param_2,0);
  return;
}
```

